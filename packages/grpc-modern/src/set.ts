import { Message } from "google-protobuf";

import { FirstCharToLowercase, FirstCharToUppercase, Values } from "./utils";

type KeyOfMessage<M extends Message> = Values<
  {
    [key in Exclude<keyof M, keyof Message>]: key extends `set${infer U}`
      ? FirstCharToLowercase<U>
      : never;
  }
>;

type SetterOfMessage<M extends Message, K extends string> = M extends {
  [key in `set${FirstCharToUppercase<K>}`]: any;
}
  ? M[`set${FirstCharToUppercase<K>}`]
  : never;

export type Literalify<M extends Message> = {
  [key in KeyOfMessage<M>]?: SetterOfMessage<M, key> extends (
    value: infer U
  ) => void
    ? U
    : never;
};

export function set<M extends Message>(
  Message: new () => M,
  props: Literalify<M>
): M {
  const _Message: any = Message;
  const _props: any = props;

  const msg = new _Message() as any;

  for (const key in props) {
    const upperedKey = key[0].toUpperCase() + key.slice(1);

    if (!msg[`set${upperedKey}`]) {
      throw new Error(`Unknown parameter: ${key}`);
    }

    msg[`set${upperedKey}`](_props[key]);
  }

  return msg;
}
