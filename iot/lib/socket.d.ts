import { Socket, Server } from 'socket.io';
export declare class VitalScoket {
    socket?: Socket;
    constructor(ws: Server);
    loggingHandle(): void;
    sendVitalData(data: any): void;
}
