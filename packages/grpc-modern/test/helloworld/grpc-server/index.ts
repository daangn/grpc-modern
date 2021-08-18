import * as grpc from "grpc";

import { set } from "../../../src";
import {
  GreeterService,
  IGreeterServer,
} from "../../__generated__/grpc/helloworld/helloworld_grpc_pb";
import { HelloRes } from "../../__generated__/grpc/helloworld/helloworld_pb";

export function makeServer({ port }: { port: number }) {
  const server = new grpc.Server();

  const greeterServer: IGreeterServer = {
    sayHello(call, callback) {
      callback(
        null,
        set(HelloRes, {
          message: `Hello, ${call.request.getName()}`,
        })
      );
    },
  };

  server.addService(GreeterService, greeterServer as any);

  function listen() {
    return new Promise<void>((resolve) => {
      server.bindAsync(
        `0.0.0.0:${port}`,
        grpc.ServerCredentials.createInsecure(),
        () => {
          server.start();
          resolve();
        }
      );
    });
  }

  function shutdown() {
    server.forceShutdown();
  }

  return {
    listen,
    shutdown,
  };
}
