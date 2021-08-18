import * as grpc from "@grpc/grpc-js";

import { set } from "../../../src";
import {
  GreeterService,
  IGreeterServer,
} from "../../__generated__/grpc-js/helloworld/helloworld_grpc_pb";
import { SayHelloRes } from "../../__generated__/grpc-js/helloworld/helloworld_pb";

export function makeServer({ port }: { port: number }) {
  const server = new grpc.Server();

  const greeterServer: IGreeterServer = {
    sayHello(call, callback) {
      callback(
        null,
        set(SayHelloRes, {
          message: `Hello, ${call.request.getName()}`,
        })
      );
    },
    throw(call, callback) {
      callback({
        code: grpc.status.INTERNAL,
        name: "INTERNAL_SERVER_ERROR",
        message: "Error example",
      });
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
