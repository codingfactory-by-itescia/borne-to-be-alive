export declare class CreateTicketDto {
    first_name: string;
    last_name: string;
    vitalId: string;
    phoneNumber: string;
    type: TypeUser;
}
export declare enum TypeUser {
    ANONYMOUS = "anonymous",
    IDENTIFY = "identify"
}
