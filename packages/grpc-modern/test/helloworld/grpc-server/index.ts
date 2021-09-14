import * as grpc from "grpc";

import { set } from "../../../src";

import {
  GreeterService,
  IGreeterServer,
} from "../../__generated__/grpc/helloworld/helloworld_grpc_pb";
import {
  SayHelloRes,
  ThrowRes,
  ThrowTwoTimesRes,
} from "../../__generated__/grpc/helloworld/helloworld_pb";

export function makeServer({ port }: { port: number }) {
  const server = new grpc.Server();

  const attemptHistory = new Map<string, number>();

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
      callback(
        {
          code: grpc.status.INTERNAL,
          name: "INTERNAL_SERVER_ERROR",
          message: "Error example",
        },
        set(ThrowRes, {})
      );
    },
    throwTwoTimes(call, callback) {
      if (!attemptHistory.has(call.request.getClientId())) {
        attemptHistory.set(call.request.getClientId(), 1);
      }

      const attemptCount = attemptHistory.get(call.request.getClientId()) ?? 1;
      attemptHistory.set(call.request.getClientId(), attemptCount + 1);

      if (attemptCount > 2) {
        callback(null, set(ThrowTwoTimesRes, {}));
        return;
      }

      callback(
        {
          code: grpc.status.UNAVAILABLE,
          name: "UNAVAILABLE",
          message: "Error example",
        },
        set(ThrowTwoTimesRes, {})
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
