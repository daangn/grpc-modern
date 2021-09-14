// package: helloworld
// file: helloworld/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SayHelloReq extends jspb.Message { 
    getName(): string;
    setName(value: string): SayHelloReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SayHelloReq.AsObject;
    static toObject(includeInstance: boolean, msg: SayHelloReq): SayHelloReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SayHelloReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SayHelloReq;
    static deserializeBinaryFromReader(message: SayHelloReq, reader: jspb.BinaryReader): SayHelloReq;
}

export namespace SayHelloReq {
    export type AsObject = {
        name: string,
    }
}

export class SayHelloRes extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): SayHelloRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SayHelloRes.AsObject;
    static toObject(includeInstance: boolean, msg: SayHelloRes): SayHelloRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SayHelloRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SayHelloRes;
    static deserializeBinaryFromReader(message: SayHelloRes, reader: jspb.BinaryReader): SayHelloRes;
}

export namespace SayHelloRes {
    export type AsObject = {
        message: string,
    }
}

export class ThrowReq extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThrowReq.AsObject;
    static toObject(includeInstance: boolean, msg: ThrowReq): ThrowReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThrowReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThrowReq;
    static deserializeBinaryFromReader(message: ThrowReq, reader: jspb.BinaryReader): ThrowReq;
}

export namespace ThrowReq {
    export type AsObject = {
    }
}

export class ThrowRes extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThrowRes.AsObject;
    static toObject(includeInstance: boolean, msg: ThrowRes): ThrowRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThrowRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThrowRes;
    static deserializeBinaryFromReader(message: ThrowRes, reader: jspb.BinaryReader): ThrowRes;
}

export namespace ThrowRes {
    export type AsObject = {
    }
}

export class ThrowTwoTimesReq extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): ThrowTwoTimesReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThrowTwoTimesReq.AsObject;
    static toObject(includeInstance: boolean, msg: ThrowTwoTimesReq): ThrowTwoTimesReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThrowTwoTimesReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThrowTwoTimesReq;
    static deserializeBinaryFromReader(message: ThrowTwoTimesReq, reader: jspb.BinaryReader): ThrowTwoTimesReq;
}

export namespace ThrowTwoTimesReq {
    export type AsObject = {
        clientId: string,
    }
}

export class ThrowTwoTimesRes extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThrowTwoTimesRes.AsObject;
    static toObject(includeInstance: boolean, msg: ThrowTwoTimesRes): ThrowTwoTimesRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThrowTwoTimesRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThrowTwoTimesRes;
    static deserializeBinaryFromReader(message: ThrowTwoTimesRes, reader: jspb.BinaryReader): ThrowTwoTimesRes;
}

export namespace ThrowTwoTimesRes {
    export type AsObject = {
    }
}
