export class CreateBookingDto {
    time_start: number;
    time_end: number;
    day: number;
    day_of_week: number;
    month: number;
    first_name: string;
    last_name: string;
    vitalId: string;
    type: TypeUser;
}

export enum TypeUser {
    ANONYMOUS = 'anonymous',
    IDENTIFY = 'identify'
  }