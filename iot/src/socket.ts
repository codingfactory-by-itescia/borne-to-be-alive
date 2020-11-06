import {Socket, Server} from 'socket.io';

export class VitalScoket{

    socket?: Socket;

    constructor(ws: Server){
        ws.on('connection', (_socket: Socket) => { 
            console.log(`connect ${this.socket!.id}`);
            this.socket = _socket
            this.loggingHandle();
        });

          
    }

    loggingHandle(){
        this.socket!.on("disconnect", () => {
            console.log(`disconnect ${this.socket!.id}`);
        });
    }

    sendVitalData(data: any){
        this.socket!.emit('vitalData', data)
    }

}