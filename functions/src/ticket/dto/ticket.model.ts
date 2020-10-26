import { Collection } from 'fireorm';

@Collection()
export class Ticket {
  id: string;
  name: string;
  surname: string;
  vitalId: string;
  phone: string;
  status: string;
}

export enum TicketStatus {
    OPEN = 'Open',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done'
}