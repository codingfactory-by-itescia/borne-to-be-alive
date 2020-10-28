import { CreateTicketDto } from './dto';
import { TicketService } from '@ticket/ticket.service';
export declare class TicketController {
    readonly ticketService: TicketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): any;
    findAllTickets(): any;
    findTicket(id: string): any;
}
