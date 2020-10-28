import { Controller, Post } from '@nestjs/common';

@Controller('sms')
export class SmsController {

    @Post()
    sendSmsToPatient(){
        return 'not implemented';
    }
}
