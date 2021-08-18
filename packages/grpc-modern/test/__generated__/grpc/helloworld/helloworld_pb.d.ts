// package: helloworld
// file: helloworld/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloReq extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReq.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReq): HelloReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReq;
    static deserializeBinaryFromReader(message: HelloReq, reader: jspb.BinaryReader): HelloReq;
}

export namespace HelloReq {
    export type AsObject = {
        name: string,
    }
}

export class HelloRes extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRes.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRes): HelloRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRes;
    static deserializeBinaryFromReader(message: HelloRes, reader: jspb.BinaryReader): HelloRes;
}

export namespace HelloRes {
    export type AsObject = {
        message: string,
    }
}
