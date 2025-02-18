import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace secterm. */
export namespace secterm {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a SectermCommonResponse. */
        interface ISectermCommonResponse {

            /** SectermCommonResponse code */
            code?: (secterm.v1.CommonCode|null);

            /** SectermCommonResponse message */
            message?: (string|null);
        }

        /** Represents a SectermCommonResponse. */
        class SectermCommonResponse implements ISectermCommonResponse {

            /**
             * Constructs a new SectermCommonResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermCommonResponse);

            /** SectermCommonResponse code. */
            public code: secterm.v1.CommonCode;

            /** SectermCommonResponse message. */
            public message: string;

            /**
             * Creates a new SectermCommonResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermCommonResponse instance
             */
            public static create(properties?: secterm.v1.ISectermCommonResponse): secterm.v1.SectermCommonResponse;

            /**
             * Encodes the specified SectermCommonResponse message. Does not implicitly {@link secterm.v1.SectermCommonResponse.verify|verify} messages.
             * @param message SectermCommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermCommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermCommonResponse message, length delimited. Does not implicitly {@link secterm.v1.SectermCommonResponse.verify|verify} messages.
             * @param message SectermCommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermCommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermCommonResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermCommonResponse;

            /**
             * Decodes a SectermCommonResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermCommonResponse;

            /**
             * Verifies a SectermCommonResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermCommonResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermCommonResponse
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermCommonResponse;

            /**
             * Creates a plain object from a SectermCommonResponse message. Also converts values to other types if specified.
             * @param message SectermCommonResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermCommonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermCommonResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermCommonResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermMessage. */
        interface ISectermMessage {

            /** SectermMessage secFile */
            secFile?: (secterm.v1.ISectermFileMessage|null);

            /** SectermMessage secTerminal */
            secTerminal?: (secterm.v1.ISectermTerminalMessage|null);

            /** SectermMessage secConnect */
            secConnect?: (secterm.v1.ISectermConnectMessage|null);

            /** SectermMessage commonResponse */
            commonResponse?: (secterm.v1.ISectermCommonResponse|null);
        }

        /** Represents a SectermMessage. */
        class SectermMessage implements ISectermMessage {

            /**
             * Constructs a new SectermMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermMessage);

            /** SectermMessage secFile. */
            public secFile?: (secterm.v1.ISectermFileMessage|null);

            /** SectermMessage secTerminal. */
            public secTerminal?: (secterm.v1.ISectermTerminalMessage|null);

            /** SectermMessage secConnect. */
            public secConnect?: (secterm.v1.ISectermConnectMessage|null);

            /** SectermMessage commonResponse. */
            public commonResponse?: (secterm.v1.ISectermCommonResponse|null);

            /** SectermMessage data. */
            public data?: ("secFile"|"secTerminal"|"secConnect"|"commonResponse");

            /**
             * Creates a new SectermMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermMessage instance
             */
            public static create(properties?: secterm.v1.ISectermMessage): secterm.v1.SectermMessage;

            /**
             * Encodes the specified SectermMessage message. Does not implicitly {@link secterm.v1.SectermMessage.verify|verify} messages.
             * @param message SectermMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermMessage.verify|verify} messages.
             * @param message SectermMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermMessage;

            /**
             * Decodes a SectermMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermMessage;

            /**
             * Verifies a SectermMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermMessage
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermMessage;

            /**
             * Creates a plain object from a SectermMessage message. Also converts values to other types if specified.
             * @param message SectermMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** CommonCode enum. */
        enum CommonCode {
            SUCCES = 0,
            ERROR = 1,
            WARN = 2
        }

        /** AuthMethod enum. */
        enum AuthMethod {
            INTERACTIVE_AUTH = 0,
            PUBLICKEY_AUTH = 1,
            PASSWORD_AUTH = 2,
            NO_CREDENTIALS = 3
        }

        /** SectermProtocols enum. */
        enum SectermProtocols {
            SECTERM_SSH = 0,
            SECTERM_TELNET = 1,
            SECTERM_SFTP = 2
        }

        /** Properties of a SectermCredentialPrivateKey. */
        interface ISectermCredentialPrivateKey {

            /** SectermCredentialPrivateKey privateKey */
            privateKey?: (Uint8Array|null);

            /** SectermCredentialPrivateKey privateKeyPassword */
            privateKeyPassword?: (Uint8Array|null);
        }

        /** Represents a SectermCredentialPrivateKey. */
        class SectermCredentialPrivateKey implements ISectermCredentialPrivateKey {

            /**
             * Constructs a new SectermCredentialPrivateKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermCredentialPrivateKey);

            /** SectermCredentialPrivateKey privateKey. */
            public privateKey: Uint8Array;

            /** SectermCredentialPrivateKey privateKeyPassword. */
            public privateKeyPassword: Uint8Array;

            /**
             * Creates a new SectermCredentialPrivateKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermCredentialPrivateKey instance
             */
            public static create(properties?: secterm.v1.ISectermCredentialPrivateKey): secterm.v1.SectermCredentialPrivateKey;

            /**
             * Encodes the specified SectermCredentialPrivateKey message. Does not implicitly {@link secterm.v1.SectermCredentialPrivateKey.verify|verify} messages.
             * @param message SectermCredentialPrivateKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermCredentialPrivateKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermCredentialPrivateKey message, length delimited. Does not implicitly {@link secterm.v1.SectermCredentialPrivateKey.verify|verify} messages.
             * @param message SectermCredentialPrivateKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermCredentialPrivateKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermCredentialPrivateKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermCredentialPrivateKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermCredentialPrivateKey;

            /**
             * Decodes a SectermCredentialPrivateKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermCredentialPrivateKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermCredentialPrivateKey;

            /**
             * Verifies a SectermCredentialPrivateKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermCredentialPrivateKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermCredentialPrivateKey
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermCredentialPrivateKey;

            /**
             * Creates a plain object from a SectermCredentialPrivateKey message. Also converts values to other types if specified.
             * @param message SectermCredentialPrivateKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermCredentialPrivateKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermCredentialPrivateKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermCredentialPrivateKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermCredentialPassword. */
        interface ISectermCredentialPassword {

            /** SectermCredentialPassword password */
            password?: (Uint8Array|null);
        }

        /** Represents a SectermCredentialPassword. */
        class SectermCredentialPassword implements ISectermCredentialPassword {

            /**
             * Constructs a new SectermCredentialPassword.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermCredentialPassword);

            /** SectermCredentialPassword password. */
            public password: Uint8Array;

            /**
             * Creates a new SectermCredentialPassword instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermCredentialPassword instance
             */
            public static create(properties?: secterm.v1.ISectermCredentialPassword): secterm.v1.SectermCredentialPassword;

            /**
             * Encodes the specified SectermCredentialPassword message. Does not implicitly {@link secterm.v1.SectermCredentialPassword.verify|verify} messages.
             * @param message SectermCredentialPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermCredentialPassword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermCredentialPassword message, length delimited. Does not implicitly {@link secterm.v1.SectermCredentialPassword.verify|verify} messages.
             * @param message SectermCredentialPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermCredentialPassword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermCredentialPassword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermCredentialPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermCredentialPassword;

            /**
             * Decodes a SectermCredentialPassword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermCredentialPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermCredentialPassword;

            /**
             * Verifies a SectermCredentialPassword message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermCredentialPassword message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermCredentialPassword
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermCredentialPassword;

            /**
             * Creates a plain object from a SectermCredentialPassword message. Also converts values to other types if specified.
             * @param message SectermCredentialPassword
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermCredentialPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermCredentialPassword to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermCredentialPassword
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermConnectRequest. */
        interface ISectermConnectRequest {

            /** SectermConnectRequest token */
            token?: (string|null);

            /** SectermConnectRequest Colums */
            Colums?: (number|null);

            /** SectermConnectRequest Rows */
            Rows?: (number|null);

            /** SectermConnectRequest unmanaged */
            unmanaged?: (boolean|null);

            /** SectermConnectRequest username */
            username?: (string|null);

            /** SectermConnectRequest authMethod */
            authMethod?: (secterm.v1.AuthMethod|null);

            /** SectermConnectRequest privateKey */
            privateKey?: (secterm.v1.ISectermCredentialPrivateKey|null);

            /** SectermConnectRequest password */
            password?: (secterm.v1.ISectermCredentialPassword|null);

            /** SectermConnectRequest hostname */
            hostname?: (string|null);

            /** SectermConnectRequest port */
            port?: (number|null);

            /** SectermConnectRequest protocol */
            protocol?: (secterm.v1.SectermProtocols|null);
        }

        /** Represents a SectermConnectRequest. */
        class SectermConnectRequest implements ISectermConnectRequest {

            /**
             * Constructs a new SectermConnectRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermConnectRequest);

            /** SectermConnectRequest token. */
            public token: string;

            /** SectermConnectRequest Colums. */
            public Colums: number;

            /** SectermConnectRequest Rows. */
            public Rows: number;

            /** SectermConnectRequest unmanaged. */
            public unmanaged: boolean;

            /** SectermConnectRequest username. */
            public username: string;

            /** SectermConnectRequest authMethod. */
            public authMethod: secterm.v1.AuthMethod;

            /** SectermConnectRequest privateKey. */
            public privateKey?: (secterm.v1.ISectermCredentialPrivateKey|null);

            /** SectermConnectRequest password. */
            public password?: (secterm.v1.ISectermCredentialPassword|null);

            /** SectermConnectRequest hostname. */
            public hostname: string;

            /** SectermConnectRequest port. */
            public port: number;

            /** SectermConnectRequest protocol. */
            public protocol: secterm.v1.SectermProtocols;

            /** SectermConnectRequest credential. */
            public credential?: ("privateKey"|"password");

            /**
             * Creates a new SectermConnectRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermConnectRequest instance
             */
            public static create(properties?: secterm.v1.ISectermConnectRequest): secterm.v1.SectermConnectRequest;

            /**
             * Encodes the specified SectermConnectRequest message. Does not implicitly {@link secterm.v1.SectermConnectRequest.verify|verify} messages.
             * @param message SectermConnectRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermConnectRequest message, length delimited. Does not implicitly {@link secterm.v1.SectermConnectRequest.verify|verify} messages.
             * @param message SectermConnectRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermConnectRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermConnectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermConnectRequest;

            /**
             * Decodes a SectermConnectRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermConnectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermConnectRequest;

            /**
             * Verifies a SectermConnectRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermConnectRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermConnectRequest
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermConnectRequest;

            /**
             * Creates a plain object from a SectermConnectRequest message. Also converts values to other types if specified.
             * @param message SectermConnectRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermConnectRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermConnectRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** SectermCode enum. */
        enum SectermCode {
            WRONG_CREDENTIAL = 0,
            NETWORK_UNREACHABLE = 1,
            UNSURPPORTED_AUTH_METHOD = 2,
            LOGON_SUCCESS = 3
        }

        /** Properties of a SectermConnectResponse. */
        interface ISectermConnectResponse {

            /** SectermConnectResponse code */
            code?: (secterm.v1.SectermCode|null);
        }

        /** Represents a SectermConnectResponse. */
        class SectermConnectResponse implements ISectermConnectResponse {

            /**
             * Constructs a new SectermConnectResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermConnectResponse);

            /** SectermConnectResponse code. */
            public code: secterm.v1.SectermCode;

            /**
             * Creates a new SectermConnectResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermConnectResponse instance
             */
            public static create(properties?: secterm.v1.ISectermConnectResponse): secterm.v1.SectermConnectResponse;

            /**
             * Encodes the specified SectermConnectResponse message. Does not implicitly {@link secterm.v1.SectermConnectResponse.verify|verify} messages.
             * @param message SectermConnectResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermConnectResponse message, length delimited. Does not implicitly {@link secterm.v1.SectermConnectResponse.verify|verify} messages.
             * @param message SectermConnectResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermConnectResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermConnectResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermConnectResponse;

            /**
             * Decodes a SectermConnectResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermConnectResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermConnectResponse;

            /**
             * Verifies a SectermConnectResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermConnectResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermConnectResponse
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermConnectResponse;

            /**
             * Creates a plain object from a SectermConnectResponse message. Also converts values to other types if specified.
             * @param message SectermConnectResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermConnectResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermConnectResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermConnectMessage. */
        interface ISectermConnectMessage {

            /** SectermConnectMessage connectReq */
            connectReq?: (secterm.v1.ISectermConnectRequest|null);

            /** SectermConnectMessage connectRes */
            connectRes?: (secterm.v1.ISectermConnectResponse|null);
        }

        /** Represents a SectermConnectMessage. */
        class SectermConnectMessage implements ISectermConnectMessage {

            /**
             * Constructs a new SectermConnectMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermConnectMessage);

            /** SectermConnectMessage connectReq. */
            public connectReq?: (secterm.v1.ISectermConnectRequest|null);

            /** SectermConnectMessage connectRes. */
            public connectRes?: (secterm.v1.ISectermConnectResponse|null);

            /** SectermConnectMessage data. */
            public data?: ("connectReq"|"connectRes");

            /**
             * Creates a new SectermConnectMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermConnectMessage instance
             */
            public static create(properties?: secterm.v1.ISectermConnectMessage): secterm.v1.SectermConnectMessage;

            /**
             * Encodes the specified SectermConnectMessage message. Does not implicitly {@link secterm.v1.SectermConnectMessage.verify|verify} messages.
             * @param message SectermConnectMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermConnectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermConnectMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermConnectMessage.verify|verify} messages.
             * @param message SectermConnectMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermConnectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermConnectMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermConnectMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermConnectMessage;

            /**
             * Decodes a SectermConnectMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermConnectMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermConnectMessage;

            /**
             * Verifies a SectermConnectMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermConnectMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermConnectMessage
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermConnectMessage;

            /**
             * Creates a plain object from a SectermConnectMessage message. Also converts values to other types if specified.
             * @param message SectermConnectMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermConnectMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermConnectMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermConnectMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermTerminalResize. */
        interface ISectermTerminalResize {

            /** SectermTerminalResize colums */
            colums?: (number|null);

            /** SectermTerminalResize rows */
            rows?: (number|null);
        }

        /** Represents a SectermTerminalResize. */
        class SectermTerminalResize implements ISectermTerminalResize {

            /**
             * Constructs a new SectermTerminalResize.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermTerminalResize);

            /** SectermTerminalResize colums. */
            public colums: number;

            /** SectermTerminalResize rows. */
            public rows: number;

            /**
             * Creates a new SectermTerminalResize instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermTerminalResize instance
             */
            public static create(properties?: secterm.v1.ISectermTerminalResize): secterm.v1.SectermTerminalResize;

            /**
             * Encodes the specified SectermTerminalResize message. Does not implicitly {@link secterm.v1.SectermTerminalResize.verify|verify} messages.
             * @param message SectermTerminalResize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermTerminalResize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermTerminalResize message, length delimited. Does not implicitly {@link secterm.v1.SectermTerminalResize.verify|verify} messages.
             * @param message SectermTerminalResize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermTerminalResize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermTerminalResize message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermTerminalResize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermTerminalResize;

            /**
             * Decodes a SectermTerminalResize message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermTerminalResize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermTerminalResize;

            /**
             * Verifies a SectermTerminalResize message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermTerminalResize message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermTerminalResize
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermTerminalResize;

            /**
             * Creates a plain object from a SectermTerminalResize message. Also converts values to other types if specified.
             * @param message SectermTerminalResize
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermTerminalResize, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermTerminalResize to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermTerminalResize
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectranTeminalCharacters. */
        interface ISectranTeminalCharacters {

            /** SectranTeminalCharacters Data */
            Data?: (Uint8Array|null);
        }

        /** Represents a SectranTeminalCharacters. */
        class SectranTeminalCharacters implements ISectranTeminalCharacters {

            /**
             * Constructs a new SectranTeminalCharacters.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectranTeminalCharacters);

            /** SectranTeminalCharacters Data. */
            public Data: Uint8Array;

            /**
             * Creates a new SectranTeminalCharacters instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectranTeminalCharacters instance
             */
            public static create(properties?: secterm.v1.ISectranTeminalCharacters): secterm.v1.SectranTeminalCharacters;

            /**
             * Encodes the specified SectranTeminalCharacters message. Does not implicitly {@link secterm.v1.SectranTeminalCharacters.verify|verify} messages.
             * @param message SectranTeminalCharacters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectranTeminalCharacters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectranTeminalCharacters message, length delimited. Does not implicitly {@link secterm.v1.SectranTeminalCharacters.verify|verify} messages.
             * @param message SectranTeminalCharacters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectranTeminalCharacters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectranTeminalCharacters message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectranTeminalCharacters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectranTeminalCharacters;

            /**
             * Decodes a SectranTeminalCharacters message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectranTeminalCharacters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectranTeminalCharacters;

            /**
             * Verifies a SectranTeminalCharacters message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectranTeminalCharacters message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectranTeminalCharacters
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectranTeminalCharacters;

            /**
             * Creates a plain object from a SectranTeminalCharacters message. Also converts values to other types if specified.
             * @param message SectranTeminalCharacters
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectranTeminalCharacters, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectranTeminalCharacters to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectranTeminalCharacters
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermTerminalMessage. */
        interface ISectermTerminalMessage {

            /** SectermTerminalMessage resize */
            resize?: (secterm.v1.ISectermTerminalResize|null);

            /** SectermTerminalMessage characters */
            characters?: (secterm.v1.ISectranTeminalCharacters|null);
        }

        /** Represents a SectermTerminalMessage. */
        class SectermTerminalMessage implements ISectermTerminalMessage {

            /**
             * Constructs a new SectermTerminalMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermTerminalMessage);

            /** SectermTerminalMessage resize. */
            public resize?: (secterm.v1.ISectermTerminalResize|null);

            /** SectermTerminalMessage characters. */
            public characters?: (secterm.v1.ISectranTeminalCharacters|null);

            /** SectermTerminalMessage data. */
            public data?: ("resize"|"characters");

            /**
             * Creates a new SectermTerminalMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermTerminalMessage instance
             */
            public static create(properties?: secterm.v1.ISectermTerminalMessage): secterm.v1.SectermTerminalMessage;

            /**
             * Encodes the specified SectermTerminalMessage message. Does not implicitly {@link secterm.v1.SectermTerminalMessage.verify|verify} messages.
             * @param message SectermTerminalMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermTerminalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermTerminalMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermTerminalMessage.verify|verify} messages.
             * @param message SectermTerminalMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermTerminalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermTerminalMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermTerminalMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermTerminalMessage;

            /**
             * Decodes a SectermTerminalMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermTerminalMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermTerminalMessage;

            /**
             * Verifies a SectermTerminalMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermTerminalMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermTerminalMessage
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermTerminalMessage;

            /**
             * Creates a plain object from a SectermTerminalMessage message. Also converts values to other types if specified.
             * @param message SectermTerminalMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermTerminalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermTerminalMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermTerminalMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** SectermFileCmd enum. */
        enum SectermFileCmd {
            TRANS_ERROR = 0,
            TRANS_FILE_EXISTED = 1,
            TRANS_CANCLE = 2,
            TRANS_SUCCESS = 3
        }

        /** ActionMode enum. */
        enum ActionMode {
            ACTIVE = 0,
            PASSIVE = 1
        }

        /** TransProtocol enum. */
        enum TransProtocol {
            ZMODEM = 0,
            SFTP = 1,
            SCP = 2,
            FTP = 3
        }

        /** Properties of a SectermFileInfo. */
        interface ISectermFileInfo {

            /** SectermFileInfo Name */
            Name?: (string|null);

            /** SectermFileInfo Path */
            Path?: (string|null);

            /** SectermFileInfo ModTime */
            ModTime?: (number|Long|null);

            /** SectermFileInfo Size */
            Size?: (number|Long|null);

            /** SectermFileInfo Mode */
            Mode?: (number|null);

            /** SectermFileInfo IsDir */
            IsDir?: (boolean|null);
        }

        /** Represents a SectermFileInfo. */
        class SectermFileInfo implements ISectermFileInfo {

            /**
             * Constructs a new SectermFileInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileInfo);

            /** SectermFileInfo Name. */
            public Name: string;

            /** SectermFileInfo Path. */
            public Path: string;

            /** SectermFileInfo ModTime. */
            public ModTime: (number|Long);

            /** SectermFileInfo Size. */
            public Size: (number|Long);

            /** SectermFileInfo Mode. */
            public Mode: number;

            /** SectermFileInfo IsDir. */
            public IsDir: boolean;

            /**
             * Creates a new SectermFileInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileInfo instance
             */
            public static create(properties?: secterm.v1.ISectermFileInfo): secterm.v1.SectermFileInfo;

            /**
             * Encodes the specified SectermFileInfo message. Does not implicitly {@link secterm.v1.SectermFileInfo.verify|verify} messages.
             * @param message SectermFileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileInfo message, length delimited. Does not implicitly {@link secterm.v1.SectermFileInfo.verify|verify} messages.
             * @param message SectermFileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileInfo;

            /**
             * Decodes a SectermFileInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileInfo;

            /**
             * Verifies a SectermFileInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileInfo
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileInfo;

            /**
             * Creates a plain object from a SectermFileInfo message. Also converts values to other types if specified.
             * @param message SectermFileInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileListRequest. */
        interface ISectermFileListRequest {

            /** SectermFileListRequest dirPath */
            dirPath?: (string|null);
        }

        /** Represents a SectermFileListRequest. */
        class SectermFileListRequest implements ISectermFileListRequest {

            /**
             * Constructs a new SectermFileListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileListRequest);

            /** SectermFileListRequest dirPath. */
            public dirPath: string;

            /**
             * Creates a new SectermFileListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileListRequest instance
             */
            public static create(properties?: secterm.v1.ISectermFileListRequest): secterm.v1.SectermFileListRequest;

            /**
             * Encodes the specified SectermFileListRequest message. Does not implicitly {@link secterm.v1.SectermFileListRequest.verify|verify} messages.
             * @param message SectermFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileListRequest message, length delimited. Does not implicitly {@link secterm.v1.SectermFileListRequest.verify|verify} messages.
             * @param message SectermFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileListRequest;

            /**
             * Decodes a SectermFileListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileListRequest;

            /**
             * Verifies a SectermFileListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileListRequest
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileListRequest;

            /**
             * Creates a plain object from a SectermFileListRequest message. Also converts values to other types if specified.
             * @param message SectermFileListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileListRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileListResponse. */
        interface ISectermFileListResponse {

            /** SectermFileListResponse FileInfo */
            FileInfo?: (secterm.v1.ISectermFileInfo[]|null);
        }

        /** Represents a SectermFileListResponse. */
        class SectermFileListResponse implements ISectermFileListResponse {

            /**
             * Constructs a new SectermFileListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileListResponse);

            /** SectermFileListResponse FileInfo. */
            public FileInfo: secterm.v1.ISectermFileInfo[];

            /**
             * Creates a new SectermFileListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileListResponse instance
             */
            public static create(properties?: secterm.v1.ISectermFileListResponse): secterm.v1.SectermFileListResponse;

            /**
             * Encodes the specified SectermFileListResponse message. Does not implicitly {@link secterm.v1.SectermFileListResponse.verify|verify} messages.
             * @param message SectermFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileListResponse message, length delimited. Does not implicitly {@link secterm.v1.SectermFileListResponse.verify|verify} messages.
             * @param message SectermFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileListResponse;

            /**
             * Decodes a SectermFileListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileListResponse;

            /**
             * Verifies a SectermFileListResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileListResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileListResponse
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileListResponse;

            /**
             * Creates a plain object from a SectermFileListResponse message. Also converts values to other types if specified.
             * @param message SectermFileListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileListResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileListResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileMove. */
        interface ISectermFileMove {

            /** SectermFileMove filePath */
            filePath?: (string|null);

            /** SectermFileMove DstPath */
            DstPath?: (string|null);

            /** SectermFileMove force */
            force?: (boolean|null);

            /** SectermFileMove recursion */
            recursion?: (boolean|null);
        }

        /** Represents a SectermFileMove. */
        class SectermFileMove implements ISectermFileMove {

            /**
             * Constructs a new SectermFileMove.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileMove);

            /** SectermFileMove filePath. */
            public filePath: string;

            /** SectermFileMove DstPath. */
            public DstPath: string;

            /** SectermFileMove force. */
            public force: boolean;

            /** SectermFileMove recursion. */
            public recursion: boolean;

            /**
             * Creates a new SectermFileMove instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileMove instance
             */
            public static create(properties?: secterm.v1.ISectermFileMove): secterm.v1.SectermFileMove;

            /**
             * Encodes the specified SectermFileMove message. Does not implicitly {@link secterm.v1.SectermFileMove.verify|verify} messages.
             * @param message SectermFileMove message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileMove message, length delimited. Does not implicitly {@link secterm.v1.SectermFileMove.verify|verify} messages.
             * @param message SectermFileMove message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileMove message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileMove;

            /**
             * Decodes a SectermFileMove message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileMove;

            /**
             * Verifies a SectermFileMove message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileMove message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileMove
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileMove;

            /**
             * Creates a plain object from a SectermFileMove message. Also converts values to other types if specified.
             * @param message SectermFileMove
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileMove to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileMove
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileDelete. */
        interface ISectermFileDelete {

            /** SectermFileDelete Path */
            Path?: (string[]|null);
        }

        /** Represents a SectermFileDelete. */
        class SectermFileDelete implements ISectermFileDelete {

            /**
             * Constructs a new SectermFileDelete.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileDelete);

            /** SectermFileDelete Path. */
            public Path: string[];

            /**
             * Creates a new SectermFileDelete instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileDelete instance
             */
            public static create(properties?: secterm.v1.ISectermFileDelete): secterm.v1.SectermFileDelete;

            /**
             * Encodes the specified SectermFileDelete message. Does not implicitly {@link secterm.v1.SectermFileDelete.verify|verify} messages.
             * @param message SectermFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileDelete message, length delimited. Does not implicitly {@link secterm.v1.SectermFileDelete.verify|verify} messages.
             * @param message SectermFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileDelete message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileDelete;

            /**
             * Decodes a SectermFileDelete message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileDelete;

            /**
             * Verifies a SectermFileDelete message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileDelete message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileDelete
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileDelete;

            /**
             * Creates a plain object from a SectermFileDelete message. Also converts values to other types if specified.
             * @param message SectermFileDelete
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileDelete to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileDelete
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileCreate. */
        interface ISectermFileCreate {

            /** SectermFileCreate file */
            file?: (secterm.v1.ISectermFileInfo|null);
        }

        /** Represents a SectermFileCreate. */
        class SectermFileCreate implements ISectermFileCreate {

            /**
             * Constructs a new SectermFileCreate.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileCreate);

            /** SectermFileCreate file. */
            public file?: (secterm.v1.ISectermFileInfo|null);

            /**
             * Creates a new SectermFileCreate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileCreate instance
             */
            public static create(properties?: secterm.v1.ISectermFileCreate): secterm.v1.SectermFileCreate;

            /**
             * Encodes the specified SectermFileCreate message. Does not implicitly {@link secterm.v1.SectermFileCreate.verify|verify} messages.
             * @param message SectermFileCreate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileCreate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileCreate message, length delimited. Does not implicitly {@link secterm.v1.SectermFileCreate.verify|verify} messages.
             * @param message SectermFileCreate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileCreate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileCreate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileCreate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileCreate;

            /**
             * Decodes a SectermFileCreate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileCreate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileCreate;

            /**
             * Verifies a SectermFileCreate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileCreate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileCreate
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileCreate;

            /**
             * Creates a plain object from a SectermFileCreate message. Also converts values to other types if specified.
             * @param message SectermFileCreate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileCreate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileCreate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileTransReq. */
        interface ISectermFileTransReq {

            /** SectermFileTransReq upload */
            upload?: (boolean|null);

            /** SectermFileTransReq uuid */
            uuid?: (string|null);

            /** SectermFileTransReq proto */
            proto?: (secterm.v1.TransProtocol|null);

            /** SectermFileTransReq mode */
            mode?: (secterm.v1.ActionMode|null);

            /** SectermFileTransReq filename */
            filename?: (string|null);

            /** SectermFileTransReq filepath */
            filepath?: (string|null);

            /** SectermFileTransReq cover */
            cover?: (boolean|null);
        }

        /** Represents a SectermFileTransReq. */
        class SectermFileTransReq implements ISectermFileTransReq {

            /**
             * Constructs a new SectermFileTransReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileTransReq);

            /** SectermFileTransReq upload. */
            public upload: boolean;

            /** SectermFileTransReq uuid. */
            public uuid: string;

            /** SectermFileTransReq proto. */
            public proto: secterm.v1.TransProtocol;

            /** SectermFileTransReq mode. */
            public mode: secterm.v1.ActionMode;

            /** SectermFileTransReq filename. */
            public filename: string;

            /** SectermFileTransReq filepath. */
            public filepath: string;

            /** SectermFileTransReq cover. */
            public cover: boolean;

            /**
             * Creates a new SectermFileTransReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileTransReq instance
             */
            public static create(properties?: secterm.v1.ISectermFileTransReq): secterm.v1.SectermFileTransReq;

            /**
             * Encodes the specified SectermFileTransReq message. Does not implicitly {@link secterm.v1.SectermFileTransReq.verify|verify} messages.
             * @param message SectermFileTransReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileTransReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileTransReq message, length delimited. Does not implicitly {@link secterm.v1.SectermFileTransReq.verify|verify} messages.
             * @param message SectermFileTransReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileTransReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileTransReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileTransReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileTransReq;

            /**
             * Decodes a SectermFileTransReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileTransReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileTransReq;

            /**
             * Verifies a SectermFileTransReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileTransReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileTransReq
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileTransReq;

            /**
             * Creates a plain object from a SectermFileTransReq message. Also converts values to other types if specified.
             * @param message SectermFileTransReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileTransReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileTransReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileTransReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileTransRes. */
        interface ISectermFileTransRes {

            /** SectermFileTransRes uuid */
            uuid?: (string|null);
        }

        /** Represents a SectermFileTransRes. */
        class SectermFileTransRes implements ISectermFileTransRes {

            /**
             * Constructs a new SectermFileTransRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileTransRes);

            /** SectermFileTransRes uuid. */
            public uuid: string;

            /**
             * Creates a new SectermFileTransRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileTransRes instance
             */
            public static create(properties?: secterm.v1.ISectermFileTransRes): secterm.v1.SectermFileTransRes;

            /**
             * Encodes the specified SectermFileTransRes message. Does not implicitly {@link secterm.v1.SectermFileTransRes.verify|verify} messages.
             * @param message SectermFileTransRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileTransRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileTransRes message, length delimited. Does not implicitly {@link secterm.v1.SectermFileTransRes.verify|verify} messages.
             * @param message SectermFileTransRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileTransRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileTransRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileTransRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileTransRes;

            /**
             * Decodes a SectermFileTransRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileTransRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileTransRes;

            /**
             * Verifies a SectermFileTransRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileTransRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileTransRes
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileTransRes;

            /**
             * Creates a plain object from a SectermFileTransRes message. Also converts values to other types if specified.
             * @param message SectermFileTransRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileTransRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileTransRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileTransRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileCmdMessage. */
        interface ISectermFileCmdMessage {

            /** SectermFileCmdMessage cmd */
            cmd?: (secterm.v1.SectermFileCmd|null);
        }

        /** Represents a SectermFileCmdMessage. */
        class SectermFileCmdMessage implements ISectermFileCmdMessage {

            /**
             * Constructs a new SectermFileCmdMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileCmdMessage);

            /** SectermFileCmdMessage cmd. */
            public cmd: secterm.v1.SectermFileCmd;

            /**
             * Creates a new SectermFileCmdMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileCmdMessage instance
             */
            public static create(properties?: secterm.v1.ISectermFileCmdMessage): secterm.v1.SectermFileCmdMessage;

            /**
             * Encodes the specified SectermFileCmdMessage message. Does not implicitly {@link secterm.v1.SectermFileCmdMessage.verify|verify} messages.
             * @param message SectermFileCmdMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileCmdMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileCmdMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermFileCmdMessage.verify|verify} messages.
             * @param message SectermFileCmdMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileCmdMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileCmdMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileCmdMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileCmdMessage;

            /**
             * Decodes a SectermFileCmdMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileCmdMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileCmdMessage;

            /**
             * Verifies a SectermFileCmdMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileCmdMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileCmdMessage
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileCmdMessage;

            /**
             * Creates a plain object from a SectermFileCmdMessage message. Also converts values to other types if specified.
             * @param message SectermFileCmdMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileCmdMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileCmdMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileCmdMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectermFileMessage. */
        interface ISectermFileMessage {

            /** SectermFileMessage fileListReq */
            fileListReq?: (secterm.v1.ISectermFileListRequest|null);

            /** SectermFileMessage fileListRes */
            fileListRes?: (secterm.v1.ISectermFileListResponse|null);

            /** SectermFileMessage fileMv */
            fileMv?: (secterm.v1.ISectermFileMove|null);

            /** SectermFileMessage fileDel */
            fileDel?: (secterm.v1.ISectermFileDelete|null);

            /** SectermFileMessage fileCreate */
            fileCreate?: (secterm.v1.ISectermFileCreate|null);

            /** SectermFileMessage fileCmd */
            fileCmd?: (secterm.v1.ISectermFileCmdMessage|null);

            /** SectermFileMessage fileTransReq */
            fileTransReq?: (secterm.v1.ISectermFileTransReq|null);

            /** SectermFileMessage fileTransRes */
            fileTransRes?: (secterm.v1.ISectermFileTransRes|null);
        }

        /** Represents a SectermFileMessage. */
        class SectermFileMessage implements ISectermFileMessage {

            /**
             * Constructs a new SectermFileMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileMessage);

            /** SectermFileMessage fileListReq. */
            public fileListReq?: (secterm.v1.ISectermFileListRequest|null);

            /** SectermFileMessage fileListRes. */
            public fileListRes?: (secterm.v1.ISectermFileListResponse|null);

            /** SectermFileMessage fileMv. */
            public fileMv?: (secterm.v1.ISectermFileMove|null);

            /** SectermFileMessage fileDel. */
            public fileDel?: (secterm.v1.ISectermFileDelete|null);

            /** SectermFileMessage fileCreate. */
            public fileCreate?: (secterm.v1.ISectermFileCreate|null);

            /** SectermFileMessage fileCmd. */
            public fileCmd?: (secterm.v1.ISectermFileCmdMessage|null);

            /** SectermFileMessage fileTransReq. */
            public fileTransReq?: (secterm.v1.ISectermFileTransReq|null);

            /** SectermFileMessage fileTransRes. */
            public fileTransRes?: (secterm.v1.ISectermFileTransRes|null);

            /** SectermFileMessage data. */
            public data?: ("fileListReq"|"fileListRes"|"fileMv"|"fileDel"|"fileCreate"|"fileCmd"|"fileTransReq"|"fileTransRes");

            /**
             * Creates a new SectermFileMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileMessage instance
             */
            public static create(properties?: secterm.v1.ISectermFileMessage): secterm.v1.SectermFileMessage;

            /**
             * Encodes the specified SectermFileMessage message. Does not implicitly {@link secterm.v1.SectermFileMessage.verify|verify} messages.
             * @param message SectermFileMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermFileMessage.verify|verify} messages.
             * @param message SectermFileMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileMessage;

            /**
             * Decodes a SectermFileMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileMessage;

            /**
             * Verifies a SectermFileMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileMessage
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileMessage;

            /**
             * Creates a plain object from a SectermFileMessage message. Also converts values to other types if specified.
             * @param message SectermFileMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
