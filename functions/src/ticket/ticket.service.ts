import { Injectable, NotFoundException, NotAcceptableException, BadRequestException } from '@nestjs/common';
import { getRepository } from 'fireorm';
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
        ticket.status = TicketStatus.OPEN;

        const created = await getRepository(Ticket).create(ticket);
        return created
    }

   async findAllTickets(): Promise<Ticket[]> {
        const foundAll = await getRepository(Ticket).find();
        return foundAll;
    }

    async findOneTicket(id: string): Promise<Ticket>{
        const found = await getRepository(Ticket).findById(id)

        if(!found)
            throw new NotFoundException('Not found ticket');

        return found.filter(ticket=> ticket.status === TicketStatus.OPEN)
    }

    async updateTicket(id: string, newStatus: string): Promise<Ticket>{
        const ticket = await getRepository(Ticket).findById(id);
        ticket.status = newStatus
        const updated = await getRepository(Ticket).update(ticket)

        if(status === TicketStatus.DONE)
             await this.deleteTicket([ticket.id])

        return updated
    }

    async deleteTicket(ids: string[]): Promise<string>{
        ids.forEach(async id=>{
            await getRepository(Ticket).delete(id)
        })
        return 'success'
    }

}
