import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [TicketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
