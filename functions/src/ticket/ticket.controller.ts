import { Body, Query, Controller, Get, Post, Param, Put, Delete, Patch} from '@nestjs/common';
import { CreateTicketDto } from './dto';
import { TicketStatus } from './dto/ticket.model';
import { TicketSatatusValidationPipe } from './pipes/ticket-satatus-validation-pipe';
import { TicketService } from './ticket.service'

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

    @Patch(':id/status/:status')
    updateTicket(@Param('id') id: string, @Param('status', TicketSatatusValidationPipe) status: TicketStatus){
        return this.ticketService.updateTicket(id, status);
    }

    @Delete(':id')
    deleteTicket(@Param('id') id: string,){
        return this.ticketService.deleteTickets([id])
    }
}
