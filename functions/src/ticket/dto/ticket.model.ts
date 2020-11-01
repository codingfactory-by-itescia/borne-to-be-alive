import { Collection } from 'fireorm';

@Collection()
export class Ticket {
  id: string;
  first_name: string | null;
  last_name: string | null;
  vitalId: string | null;
  phone: string | null;
  status: string;
}

// tslint:disable-next-line: max-classes-per-file


export enum TicketStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  DONE = 'done'
}