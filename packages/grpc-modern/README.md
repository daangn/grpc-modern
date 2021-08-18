# gRPC Modern

[![codecov](https://codecov.io/gh/daangn/grpc-modern/branch/main/graph/badge.svg?token=DDA5G6PWJ1)](https://codecov.io/gh/daangn/grpc-modern)
![](https://img.shields.io/npm/v/grpc-modern)
![](https://img.shields.io/bundlephobia/min/grpc-modern)
![](https://img.shields.io/npm/l/grpc-modern)
![](https://img.shields.io/github/last-commit/daangn/grpc-modern)

Makes grpc clients(`@grpc/grpc-js`, `grpc`) fit in modern JavaScript(TypeScript) environment.

- Change callback interface with `Promise`
- Change `new` + `set` interface with object literal

## Installation

```bash
$ yarn add grpc-modern
```

## Usage

```typescript
/**
 * without `grpc-modern`
 */
import * as grpc from "@grpc/grpc-js";
import { GetSomethingReq, SomethingClient } from "../stubs/something/...";

const client = new SomethingClient(
  "example.com:80",
  grpc.credentials.createInsecure()
);

const req = new GetSomethingReq();
req.setId("...");
req.setSomeOption(false);

client.getSomething(req, (error, response) => {
  console.log(response);
});

/**
 * with `grpc-modern`
 */
import { makeModernClient } from "grpc-modern";

const client = makeModernClient(SomethingClient, {
  address: "example.com:80",
  credentials: grpc.credentials.createInsecure(),
});

const response = await client.getSomething(
  set(GetSomethingReq, {
    id: "...",
    someOption: false,
  })
);

/**
 * or you can use with `grpc`
 */
import * as grpc from "grpc";

const client = makeModernClient(SomethingClient, {
  address: "example.com:80",
  credentials: grpc.credentials.createInsecure(),
});

const response = await client.getSomething(
  set(GetSomethingReq, {
    id: "...",
    someOption: false,
  })
);
```
