import {
  CallOptions as GrpcCallOptions,
  ClientUnaryCall as GrpcClientUnaryCall,
  Metadata as GrpcMetadata,
  ServiceError as GrpcServiceError,
  status as GrpcStatus,
} from "grpc";
import {
  CallOptions as GrpcJsCallOptions,
  ClientUnaryCall as GrpcJsClientUnaryCall,
  Metadata as GrpcJsMetadata,
  ServiceError as GrpcJsServiceError,
  status as GrpcJsStatus,
} from "@grpc/grpc-js";
import { Message } from "google-protobuf";
import pRetry from "p-retry";

export type GrpcCallback<R> = (
  error: GrpcServiceError | null,
  response: R
) => void;
export type GrpcJsCallback<R> = (
  error: GrpcJsServiceError | null,
  response: R
) => void;

export interface GrpcMethod<
  M extends Message,
  R extends { toObject(): any } = any
> {
  (message: M, callback: GrpcCallback<R>): GrpcClientUnaryCall;
  (
    message: M,
    metadata: GrpcMetadata,
    callback: GrpcCallback<R>
  ): GrpcClientUnaryCall;

  (
    message: M,
    metadata: GrpcMetadata,
    options: Partial<GrpcCallOptions>,
    callback: GrpcCallback<R>
  ): GrpcClientUnaryCall;
}

export interface GrpcJsMethod<
  M extends Message,
  R extends { toObject(): any } = any
> {
  (message: M, callback: GrpcJsCallback<R>): GrpcJsClientUnaryCall;
  (
    message: M,
    metadata: GrpcJsMetadata,
    callback: GrpcJsCallback<R>
  ): GrpcJsClientUnaryCall;
  (
    message: M,
    metadata: GrpcJsMetadata,
    options: Partial<GrpcJsCallOptions>,
    callback: GrpcJsCallback<R>
  ): GrpcJsClientUnaryCall;
}

type Metadata = GrpcMetadata | GrpcJsMetadata;
type CallOptions = GrpcCallOptions & GrpcJsCallOptions;
type Status = GrpcStatus | GrpcJsStatus;

export interface GrpcRetryOption {
  attempt: number;
  failCodes: Array<Status>;
}

export type PromisifiedMethod<M extends Message, R> = {
  (
    message: M,
    option?: {
      metadata?: Metadata;
      callOptions?: Partial<CallOptions>;
      retry?: GrpcRetryOption;
    }
  ): Promise<PromisifiedMethodResult<R>>;
};

type PromisifiedMethodResult<R> = R extends { toObject(): infer O } ? O : never;

export function promisify<M extends Message, R extends { toObject(): any }>(
  method: GrpcMethod<M, R>,
  options: { retry?: GrpcRetryOption }
): PromisifiedMethod<M, R> {
  const parentOptions = options;

  return function promisified(
    message: M,
    options?: {
      metadata?: Metadata;
      callOptions?: Partial<CallOptions>;
      retry?: GrpcRetryOption;
    }
  ): Promise<PromisifiedMethodResult<R>> {
    const { metadata, callOptions } = options ?? {};

    const retry = options?.retry ?? parentOptions.retry;
    const maxAttemptCount = retry?.attempt;
    const failCodes = retry?.failCodes;

    return pRetry(
      () =>
        new Promise<PromisifiedMethodResult<R>>((resolve, reject) => {
          const callback: GrpcCallback<R> = (error, response) => {
            if (error) {
              error.code && failCodes?.includes(error.code)
                ? reject(error)
                : reject(new pRetry.AbortError(error));
            } else {
              resolve(response.toObject());
            }
          };

          if (metadata && callOptions) {
            return method(message, metadata, callOptions, callback);
          } else if (metadata) {
            return method(message, metadata, callback);
          } else {
            return method(message, callback);
          }
        }),
      {
        retries: maxAttemptCount,
      }
    );
  };
}
