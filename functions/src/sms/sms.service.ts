import { Inject, Injectable } from '@nestjs/common';
import { Sms } from './dto/sms.model';
import * as Twilio from 'twilio'

const clientTwilio = Twilio('AC3053c1a82ef28de47c5aa674ac4ec975', 'af08026ee33fd2af7aac923f03b4a177')

@Injectable()
export class SmsService {

    @Inject('TWILIO_CLIENT')
    private readonly client: Twilio.Twilio;

    async sendSmsToUser(confSms: Sms){
        // tslint:disable-next-line: no-console
        console.info(confSms)
        try {
            const message = await this.client.messages
            .create({
               body: confSms.message,
               from: process.env.TWILIO_PHONE,
               to: '+33'+confSms.phone.slice(1)
             })
             // tslint:disable-next-line: no-console
             console.log('Message : ',message)
        } catch (error) {
            throw new Error(error);
        }
    }
}