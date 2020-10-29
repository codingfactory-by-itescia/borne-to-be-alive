export declare class Ticket {
    id: string;
    first_name: string | null;
    last_name: string | null;
    vitalId: string | null;
    phone: string | null;
    status: string;
}
export declare enum TicketStatus {
    OPEN = "open",
    IN_PROGRESS = "in Progress",
    DONE = "done"
}
