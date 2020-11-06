import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import {client} from './twilio'

@Module({
  controllers: [],
  providers: [SmsService,{
    provide: 'TWILIO_CLIENT',
    useValue: client,
  }],
  exports: [SmsService]
})

export class SmsModule {}
