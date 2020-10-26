import { Ticket } from './dto/ticket.model';
import { CreateTicketDto } from './dto';
export declare class TicketService {
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAllTickets(): Promise<Ticket[]>;
    findOneTicket(id: string): Promise<Ticket | any>;
}
