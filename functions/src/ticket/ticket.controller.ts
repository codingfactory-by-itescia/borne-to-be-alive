import { Body, Query, Controller, Get, Post, Param} from '@nestjs/common';
import { CreateTicketDto, ListAllTicketsDto } from './dto/index.dto';

@Controller('ticket')
export class TicketController {

    @Post()
    create(@Body() createTicketDto: CreateTicketDto){
        return 'This action adds a new cat';
    }

    @Get()
    findAllTickets(@Query() query: ListAllTicketsDto){
        return 'test'
    }

    @Get(':id')
    findTicket(@Param('id') id: string){
        return `You search ticket id : ${id}`
    }
}
