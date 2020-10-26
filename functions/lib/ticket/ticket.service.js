"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const fireorm_1 = require("fireorm");
const ticket_model_1 = require("./dto/ticket.model");
let TicketService = class TicketService {
    async createTicket(createTicketDto) {
        const ticket = new ticket_model_1.Ticket();
        const snapshot = await this.findAllTickets();
        ticket.id = (snapshot.length + 1).toString();
        ticket.name = createTicketDto.name;
        ticket.surname = createTicketDto.surname;
        ticket.vitalId = createTicketDto.vitalId;
        ticket.phone = createTicketDto.phoneNumber;
        ticket.status = ticket_model_1.TicketStatus.OPEN;
        return fireorm_1.getRepository(ticket_model_1.Ticket).create(ticket);
    }
    async findAllTickets() {
        return fireorm_1.getRepository(ticket_model_1.Ticket).find();
    }
    async findOneTicket(id) {
        return fireorm_1.getRepository(ticket_model_1.Ticket).findById(id);
    }
};
TicketService = __decorate([
    common_1.Injectable()
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map