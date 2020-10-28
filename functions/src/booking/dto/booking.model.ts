export class Booking {
    id: string;
    time_start: number;
    time_end: number;
    day: number;
    day_of_week: number;
    month: number;
    name: string;
    surname: string;
    vitalId: string;
    status: string;
}

export enum BookingStatus {
    BOOKED = 'Booked',
    TODAY= 'Today',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done'
}