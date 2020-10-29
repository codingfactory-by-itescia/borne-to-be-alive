export class Booking {
    id: string;
    time_start: number;
    day: number;
    day_of_week: number;
    month: number;
    first_name: string;
    last_name: string;
    vitalId: string;
    status: string;
}

export enum BookingStatus {
    BOOKED = 'Booked',
    TODAY= 'Today',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done'
}

