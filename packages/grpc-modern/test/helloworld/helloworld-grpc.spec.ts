import * as grpc from "grpc";

import { makeModernClient, ModernClient, set } from "../../src";
import { GreeterClient } from "../__generated__/grpc/helloworld/helloworld_grpc_pb";
import {
  SayHelloReq,
  ThrowReq,
  ThrowTwoTimesReq,
} from "../__generated__/grpc/helloworld/helloworld_pb";
import { makeServer } from "./grpc-server";

let server: ReturnType<typeof makeServer>;
let client: ModernClient<GreeterClient>;

jest.setTimeout(30000);

describe("helloworld (grpc)", () => {
  beforeAll(async () => {
    const PORT = 50010;

    server = makeServer({ port: PORT });
    client = makeModernClient(GreeterClient, {
      address: `0.0.0.0:${PORT}`,
      credential: grpc.credentials.createInsecure(),
    });

    await server.listen();
  });

  test("sayHello", async () => {
    const name = "Tony";

    await expect(
      client.sayHello(
        set(SayHelloReq, {
          name,
        })
      )
    ).resolves.toEqual({
      message: `Hello, ${name}`,
    });

    await expect(
      client.sayHello(
        set(SayHelloReq, {
          name,
        }),
        {
          metadata: new grpc.Metadata(),
        }
      )
    ).resolves.toEqual({
      message: `Hello, ${name}`,
    });

    await expect(
      client.sayHello(
        set(SayHelloReq, {
          name,
        }),
        {
          metadata: new grpc.Metadata(),
          callOptions: {
            deadline: Date.now() + 1000,
          },
        }
      )
    ).resolves.toEqual({
      message: `Hello, ${name}`,
    });

    await expect(client.throw(set(ThrowReq, {}))).rejects.toEqual(
      new Error("13 INTERNAL: Error example")
    );
  });

  test("retry", async () => {
    await expect(
      client.throwTwoTimes(
        set(ThrowTwoTimesReq, { clientId: "1times retry-grpc" }),
        {
          retry: {
            maxAttemptCount: 1,
            failCodes: [grpc.status.UNAVAILABLE],
          },
        }
      )
    ).rejects.toEqual(new Error("14 UNAVAILABLE: Error example"));

    await expect(
      client.throwTwoTimes(
        set(ThrowTwoTimesReq, { clientId: "2times retry-grpc" }),
        {
          retry: {
            maxAttemptCount: 2,
            failCodes: [grpc.status.UNAVAILABLE],
          },
        }
      )
    ).resolves.toEqual({});
  });

  afterAll(() => {
    server.shutdown();
  });
});
