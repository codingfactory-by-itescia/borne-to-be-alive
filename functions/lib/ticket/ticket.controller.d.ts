import { CreateTicketDto } from './dto';
import { TicketStatus } from './dto/ticket.model';
import { TicketService } from './ticket.service';
export declare class TicketController {
    readonly ticketService: TicketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<import("./dto/ticket.model").Ticket>;
    findAllTickets(): Promise<import("./dto/ticket.model").Ticket[]>;
    findTicket(id: string): Promise<import("./dto/ticket.model").Ticket>;
    updateTicket(id: string, status: TicketStatus): Promise<import("./dto/ticket.model").Ticket>;
}
