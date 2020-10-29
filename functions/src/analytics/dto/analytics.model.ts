import { Collection } from "fireorm";

@Collection()
export class Analytics{
    id: string;
    day: string;
    hours: string;
    consultations: Consultations[];
}

interface Consultations {
    time: string;
    people: number;
}