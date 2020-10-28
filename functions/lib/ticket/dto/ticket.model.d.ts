export declare class Ticket {
    id: string;
    first_name: string;
    last_name: string;
    vitalId: string;
    phone: string;
    status: string;
}
export declare enum TicketStatus {
    OPEN = "open",
    IN_PROGRESS = "in Progress",
    DONE = "done"
}
