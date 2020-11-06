import { Ticket } from 'ticket/dto/ticket.model';

export class Sms {
    phone: string;
    message: string;
}

export const SmsMessageType = (id: string) => {
    return `Bonjour/Bonsoir, votre numéro de ticket est le ${id}`
}