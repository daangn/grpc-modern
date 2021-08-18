# gRPC Modern

Make grpc client fit in modern JavaScript(TypeScript) environment.

- Change callback interface with `Promise`
- Change `new` + `set` interface with object literal

## Installation

```bash
$ yarn add grpc-modern
```

## Usage

### without `grpc-modern`

```typescript
import { credentials } from "grpc";
import { GetSomethingReq, SomethingClient } from "../stubs/something/...";

const client = new SomethingClient(
  "example.com:80",
  credentials.createInsecure()
);
const req = new GetSomethingReq();
req.setId("...");
req.setSomeOption(false);

client.getSomething(req, (error, response) => {
  console.log(response);
});
```

### with `grpc-modern`

```typescript
import { credentials } from "grpc";
import { makeModernClient } from "grpc-modern";
import { GetSomethingReq, SomethingClient } from "../stubs/something/...";

const client = makeModernClient(SomethingClient, {
  address: "example.com:80",
  credentials: credentials.createInsecure(),
});

const [error, response] = await client.getSomething(
  set(GetSomethingReq, {
    id: "...",
    someOption: false,
  })
);

console.log(response);
```

### Nested message with `grpc-modern`

```typescript
import { Int64Value } from "google-protobuf/google/protobuf/wrappers_pb";
import { credentials } from "grpc";
import { makeModernClient, set } from "grpc-modern";
import { GetSomethingReq, SomethingClient } from "../stubs/something/...";

const client = makeModernClient(SomethingClient, {
  address: "example.com:80",
  credentials: credentials.createInsecure(),
});

const [error, response] = await client.getSomething(
  set(GetSomethingReq, {
    ids: [1, 2, 3].map((i) =>
      set(Int64Value, {
        value: i,
      })
    ),
  })
);

console.log(response);
```
