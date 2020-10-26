import { IsDefined, IsString } from 'class-validator';

export class CreateTicketDto {

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    surname: string;

    @IsDefined()
    @IsString()
    vitalId: string;

    @IsDefined()
    @IsString()
    phoneNumber: string;
  }