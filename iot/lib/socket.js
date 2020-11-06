"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VitalScoket = void 0;
class VitalScoket {
    constructor(ws) {
        ws.on('connection', (_socket) => {
            console.log(`connect ${this.socket.id}`);
            this.socket = _socket;
            this.loggingHandle();
        });
    }
    loggingHandle() {
        this.socket.on("disconnect", () => {
            console.log(`disconnect ${this.socket.id}`);
        });
    }
    sendVitalData(data) {
        this.socket.emit('vitalData', data);
    }
}
exports.VitalScoket = VitalScoket;
//# sourceMappingURL=socket.js.map