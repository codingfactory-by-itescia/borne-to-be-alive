import { IsOptional } from 'class-validator';

export class GetBookingFilterDto {

     @IsOptional()
     status: string;

     @IsOptional()
     time: TimeSearch
}

interface TimeSearch {
    time_start: number;
    time_end: number;
}