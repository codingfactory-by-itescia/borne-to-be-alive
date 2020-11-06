import { BadRequestException, Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Ticket, TicketStatus } from './dto/ticket.model'

import { CreateTicketDto } from './dto';
import { TypeUser } from './dto/createTicket.dto';
import { getRepository } from 'fireorm';
import { SmsService } from 'sms/sms.service';
import { Sms, SmsMessageType } from 'sms/dto/sms.model';

@Injectable()
export class TicketService {

    constructor(readonly smsService: SmsService){}

    async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
        const snapshot =  await this.findAllTickets()

        const ticket = new Ticket();

        ticket.id = snapshot.length === 0 ? '1' : (parseInt(snapshot[snapshot.length-1].id) + 1).toString()
        ticket.status = TicketStatus.OPEN;

        if(createTicketDto.type === TypeUser.IDENTIFIED){
            ticket.first_name = createTicketDto.first_name;
            ticket.last_name = createTicketDto.last_name;
            ticket.vitalId = createTicketDto.vitalId;
            ticket.phone = createTicketDto.phoneNumber;
        }

        if(ticket.phone){
            const newSms = new Sms()
            newSms.phone = ticket.phone
            newSms.message = SmsMessageType(ticket.id)
            await this.smsService.sendSmsToUser(newSms)
        }

        const created = await getRepository(Ticket).create(ticket);
        return created
    }

    async findAllTickets(): Promise<Ticket[]> {
        const foundAll = await getRepository(Ticket).find();
        return foundAll;
    }

    async findOneTicket(id: string): Promise<Ticket> {
        const found = await getRepository(Ticket).findById(id)

        if (!found)
            throw new NotFoundException('Not found ticket');

        return found
    }

    async updateTicket(id: string, newStatus: string): Promise<Ticket> {
        const ticket = await getRepository(Ticket).findById(id);
        ticket.status = newStatus
        const updated = await getRepository(Ticket).update(ticket)

        if (newStatus === TicketStatus.DONE)
            await this.deleteTickets([ticket.id])

        return updated
    }

    async deleteTickets(ids: string[]): Promise<string> {
        ids.forEach(async id => {
            await getRepository(Ticket).delete(id)
        })
        return 'success'
    }

}
