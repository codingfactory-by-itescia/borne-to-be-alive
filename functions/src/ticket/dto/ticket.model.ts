import { Collection } from 'fireorm';

@Collection()
export class Ticket {
  id: string;
  first_name: string | undefined;
  last_name: string | undefined;
  vitalId: string | undefined;
  phone: string | undefined;
  status: string;
}

export enum TicketStatus {
    OPEN = 'open',
    IN_PROGRESS = 'in Progress',
    DONE = 'done'
}