import { VitalScoket } from './socket'
import * as SocketIO from "socket.io";
import {CardVitalRead} from './cardreader'

async function init(){
    const io = new SocketIO(3005);
    const socket: VitalScoket = new VitalScoket(io)
    new CardVitalRead(socket)
    // tslint:disable-next-line: no-floating-promises
}
// tslint:disable-next-line: no-floating-promises
init()