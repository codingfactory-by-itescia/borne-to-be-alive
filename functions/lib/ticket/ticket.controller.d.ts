import { CreateTicketDto } from './dto';
import { TicketService } from '@ticket/ticket.service';
export declare class TicketController {
    readonly ticketService: TicketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<import("./dto/ticket.model").Ticket>;
    findAllTickets(): Promise<import("./dto/ticket.model").Ticket[]>;
    findTicket(id: string): Promise<any>;
}
