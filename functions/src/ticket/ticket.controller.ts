import { Body, Query, Controller, Get, Post, Param} from '@nestjs/common';
import { CreateTicketDto } from './dto';
import { TicketService } from '@ticket/ticket.service'

@Controller('ticket')
export class TicketController {
    constructor(readonly ticketService: TicketService){}

    @Post()
    create(@Body() createTicketDto: CreateTicketDto){
        return this.ticketService.createTicket(createTicketDto);
    }

    @Get()
    findAllTickets(){
        return this.ticketService.findAllTickets();
    }

    @Get(':id')
    findTicket(@Param('id') id: string){
        return this.ticketService.findOneTicket(id);
    }
}
