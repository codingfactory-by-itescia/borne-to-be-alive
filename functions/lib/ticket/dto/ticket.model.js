"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketStatus = exports.Ticket = void 0;
const fireorm_1 = require("fireorm");
let Ticket = class Ticket {
};
Ticket = __decorate([
    fireorm_1.Collection()
], Ticket);
exports.Ticket = Ticket;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["OPEN"] = "Open";
    TicketStatus["IN_PROGRESS"] = "In Progress";
    TicketStatus["DONE"] = "Done";
})(TicketStatus = exports.TicketStatus || (exports.TicketStatus = {}));
//# sourceMappingURL=ticket.model.js.map