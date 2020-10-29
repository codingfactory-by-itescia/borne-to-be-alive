import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateTicketDto {

  @IsDefined()
  @IsString()
  first_name: string;

  @IsDefined()
  @IsString()
  last_name: string;

  @IsDefined()
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
