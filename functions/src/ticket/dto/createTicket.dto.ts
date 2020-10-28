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

  @IsDefined()
  @IsString()
  phoneNumber: string;
}