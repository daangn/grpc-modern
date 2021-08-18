import {
  ChannelCredentials as GrpcChannelCredentials,
  Client as GrpcClient,
} from "grpc";
import {
  ChannelCredentials as GrpcJsChannelCredentials,
  Client as GrpcJsClient,
} from "@grpc/grpc-js";

import {
  GrpcJsMethod,
  GrpcMethod,
  PromisifiedMethod,
  promisify,
} from "./promisify";

type Client = GrpcClient | GrpcJsClient;
type ClientConstructor<C extends Client> = C extends GrpcClient
  ? new (
      address: string,
      credentials: GrpcChannelCredentials,
      options?: object
    ) => C
  : C extends GrpcJsClient
  ? new (
      address: string,
      credentials: GrpcJsChannelCredentials,
      options?: object
    ) => C
  : never;

export type ModernClient<C extends Client> = {
  [key in keyof C]: C[key] extends GrpcMethod<infer M, infer R>
    ? PromisifiedMethod<M, R>
    : C[key] extends GrpcJsMethod<infer M, infer R>
    ? PromisifiedMethod<M, R>
    : never;
};

export function makeModernClient<C extends Client>(
  clientConstructor: ClientConstructor<C>,
  options: {
    address: string;
    credential: C extends GrpcClient
      ? GrpcChannelCredentials
      : GrpcJsChannelCredentials;
    options?: object;
  }
): ModernClient<C> {
  const _clientConstructor: any = clientConstructor;
  const _client: any = new _clientConstructor(
    options.address,
    options.credential,
    options.options
  );

  for (const key in _clientConstructor.service) {
    const method = _client[key].bind(_client);
    _client[key] = promisify(method);
  }

  return _client;
}
