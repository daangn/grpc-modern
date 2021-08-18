import {
  CallOptions as GrpcCallOptions,
  ClientUnaryCall as GrpcClientUnaryCall,
  Metadata as GrpcMetadata,
  ServiceError as GrpcServiceError,
} from "grpc";
import {
  CallOptions as GrpcJsCallOptions,
  ClientUnaryCall as GrpcJsClientUnaryCall,
  Metadata as GrpcJsMetadata,
  ServiceError as GrpcJsServiceError,
} from "@grpc/grpc-js";
import { Message } from "google-protobuf";

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

export type PromisifiedMethod<M extends Message, R> = {
  (message: M): Promise<PromisifiedMethodResult<R>>;
  (message: M, metadata: Metadata): Promise<PromisifiedMethodResult<R>>;
  (message: M, metadata: Metadata, options: Partial<CallOptions>): Promise<
    PromisifiedMethodResult<R>
  >;
};

type ServiceError = GrpcServiceError | GrpcJsServiceError;

type PromisifiedMethodResult<R> =
  | [error: ServiceError]
  | [error: null, response: R extends { toObject(): infer O } ? O : never];

export function promisify<M extends Message, R extends { toObject(): any }>(
  method: GrpcMethod<M, R>
): PromisifiedMethod<M, R> {
  function promisified(message: M): Promise<PromisifiedMethodResult<R>>;
  function promisified(
    message: M,
    metadata: Metadata
  ): Promise<PromisifiedMethodResult<R>>;
  function promisified(
    message: M,
    metadata: Metadata,
    options: Partial<CallOptions>
  ): Promise<PromisifiedMethodResult<R>>;
  function promisified(
    message: M,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): Promise<PromisifiedMethodResult<R>> {
    return new Promise<PromisifiedMethodResult<R>>((resolve) => {
      const callback: GrpcCallback<R> = (error, response) => {
        if (error) {
          resolve([error]);
        } else {
          resolve([null, response.toObject()]);
        }
      };

      if (metadata && options) {
        return method(message, metadata, options, callback);
      } else if (metadata) {
        return method(message, metadata, callback);
      } else {
        return method(message, callback);
      }
    });
  }

  return promisified;
}
