"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("./socket");
const SocketIO = require("socket.io");
const cardreader_1 = require("./cardreader");
async function init() {
    const io = new SocketIO(3005);
    const socket = new socket_1.VitalScoket(io);
    new cardreader_1.CardVitalRead(socket);
    // tslint:disable-next-line: no-floating-promises
}
// tslint:disable-next-line: no-floating-promises
init();
//# sourceMappingURL=index.js.map