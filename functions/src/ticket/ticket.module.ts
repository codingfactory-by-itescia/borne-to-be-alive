import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { TicketSatatusValidationPipe } from './pipes/ticket-satatus-validation-pipe';
import { SmsModule } from 'sms/sms.module';

@Module({
  imports : [SmsModule],
  controllers: [TicketController],
  providers: [TicketService, TicketSatatusValidationPipe]
})
export class TicketModule {}
