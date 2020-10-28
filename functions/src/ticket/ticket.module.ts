import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { TicketSatatusValidationPipe } from './pipes/ticket-satatus-validation-pipe';

@Module({
  controllers: [TicketController],
  providers: [TicketService, TicketSatatusValidationPipe]
})
export class TicketModule {}
