import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TicketStatus } from 'ticket/dto/ticket.model';

@Injectable()
export class TicketSatatusValidationPipe implements PipeTransform {
    readonly allowedValues = [
        TicketStatus.IN_PROGRESS,
        TicketStatus.DONE
    ]

    transform(value: any, ){
        if(!this.isStatusValue(value))
            throw new BadRequestException(`"${value}" is not valid status to update ticket (IN_PROGRESS OR DONE)`)
        return value
    }

    private isStatusValue(status: TicketStatus){
        const find = this.allowedValues.indexOf(status)
        return find !== -1
    }
}
