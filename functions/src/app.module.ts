import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { SmsModule } from './sms/sms.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [TicketModule, SmsModule, BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
