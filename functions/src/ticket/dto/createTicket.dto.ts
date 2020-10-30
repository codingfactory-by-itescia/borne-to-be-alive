import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';

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
  type: TypeUser
}

  export enum TypeUser {
    ANONYMOUS = 'anonymous',
    IDENTIFIED = 'identified'
  }
