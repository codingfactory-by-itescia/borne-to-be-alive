import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateTicketDto {

    @IsOptional()
    @IsString()
    first_name: string;

    @IsOptional()
    @IsString()
    last_name: string;

    @IsOptional()
    @IsString()
    vitalId: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsDefined()
    @IsString()
    type: TypeUser
  }

  export enum TypeUser {
    ANONYMOUS = 'anonymous',
    IDENTIFY = 'identify'
  }