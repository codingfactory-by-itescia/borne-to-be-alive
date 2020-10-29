import { Injectable, NotFoundException, NotAcceptableException, BadRequestException } from '@nestjs/common';
import { getRepository } from 'fireorm';
import {Ticket, TicketStatus} from './dto/ticket.model'
import { CreateTicketDto } from './dto';
import { TypeUser } from './dto/createTicket.dto';

@Injectable()
export class TicketService {

    async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
        const snapshot =  await this.findAllTickets()

        const ticket = new Ticket();
        ticket.id = (snapshot.length + 1).toString()
        ticket.status = TicketStatus.OPEN;

        if(createTicketDto.type === TypeUser.IDENTIFY){
            ticket.first_name = createTicketDto.first_name;
            ticket.last_name = createTicketDto.last_name;
            ticket.vitalId = createTicketDto.vitalId;
            ticket.phone = createTicketDto.phoneNumber;

            const created = await getRepository(Ticket).create(ticket);
            return created
        }

        if(createTicketDto.type === TypeUser.ANONYMOUS){
            const created = await getRepository(Ticket).create(ticket);
            return created
        }
    }

   async findAllTickets(): Promise<Ticket[]> {
        const foundAll = await getRepository(Ticket).find();
        return foundAll;
    }

    async findOneTicket(id: string): Promise<Ticket>{
        const found = await getRepository(Ticket).findById(id)

        if(!found)
            throw new NotFoundException('Not found ticket');

        return found
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
