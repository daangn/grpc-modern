import * as grpc from "@grpc/grpc-js";

import { set } from "../../../src";
import {
  GreeterService,
  IGreeterServer,
} from "../../__generated__/grpc-js/helloworld/helloworld_grpc_pb";
import {
  SayHelloRes,
  ThrowTwoTimesRes,
} from "../../__generated__/grpc-js/helloworld/helloworld_pb";

export function makeServer({ port }: { port: number }) {
  const server = new grpc.Server();

  const attemptCountMap = new Map<string, number>();

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

    throwTwoTimes(call, callback) {
      if (!attemptCountMap.has(call.request.getClientId())) {
        attemptCountMap.set(call.request.getClientId(), 1);
      }

      const attemptCount = attemptCountMap.get(call.request.getClientId()) ?? 1;
      attemptCountMap.set(call.request.getClientId(), attemptCount + 1);

      if (attemptCount > 2) {
        callback(null, set(ThrowTwoTimesRes, {}));
        return;
      }

      callback(
        {
          code: grpc.status.UNAVAILABLE,
          name: "Unavailable",
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
