import { CreateTicketDto, ListAllTicketsDto } from './dto/index.dto';
export declare class TicketController {
    create(createTicketDto: CreateTicketDto): string;
    findAllTickets(query: ListAllTicketsDto): string;
    findTicket(id: string): string;
}
