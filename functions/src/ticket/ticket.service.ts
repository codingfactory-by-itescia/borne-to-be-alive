import { Injectable } from '@nestjs/common';
import { Collection, getRepository } from 'fireorm';
import {Ticket, TicketStatus} from './dto/ticket.model'
import { CreateTicketDto } from './dto';

@Injectable()
export class TicketService {

    async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
        const ticket = new Ticket();
        const snapshot =  await this.findAllTickets()
        ticket.id = (snapshot.length + 1).toString()
        ticket.name = createTicketDto.name;
        ticket.surname = createTicketDto.surname;
        ticket.vitalId = createTicketDto.vitalId;
        ticket.phone = createTicketDto.phoneNumber;
        ticket.status = TicketStatus.OPEN

        return getRepository(Ticket).create(ticket)
    }

   async  findAllTickets(): Promise<Ticket[]> {
        return getRepository(Ticket).find()
    }

    // tslint:disable-next-line: no-empty
    async findOneTicket(id: string): Promise<Ticket | any>{
        return getRepository(Ticket).findById(id)
    }

}
