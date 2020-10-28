import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto, GetBookingFilterDto } from './dto';
import { getRepository } from 'fireorm';
import { Booking, BookingStatus} from './dto/booking.model'

@Injectable()
export class BookingService {

    async createBooking(booking: CreateBookingDto): Promise<Booking>{

        const newBooking = new Booking()
        newBooking.id = ''
        newBooking.name = booking.name
        newBooking.surname = booking.surname
        newBooking.vitalId = booking.vitalId
        newBooking.time_start = booking.time_start
        newBooking.time_end = booking.time_end
        newBooking.day = booking.day
        newBooking.day_of_week = booking.day_of_week
        newBooking.month = booking.month
        newBooking.status = BookingStatus.BOOKED
        if(this.validateBookingTime(newBooking)){
            throw new BadRequestException('There is already a reservation at this time.')
        }
        const created = await getRepository(Booking).create(newBooking)
        return  created
    }

    async findAllBookings(): Promise<Booking[]>{
        const found = await getRepository(Booking).find()

        if(!found)
            throw new NotFoundException('Not found Booking');

        return found
    }

    async searchBooking(filterDto: GetBookingFilterDto): Promise<Booking[]>{
        const {time, status} = filterDto

        let findSearch: Booking[] | Promise<Booking[]>;

        if(status && !time){
            findSearch = await getRepository(Booking).whereEqualTo(booking => booking.status, status).find()
        }
        else if(time && !status){
            findSearch = await getRepository(Booking)
            .whereGreaterOrEqualThan(booking => booking.time_end, time.time_start)
            .whereLessOrEqualThan(booking=> booking.time_start, time.time_end)
            .find()
        }
        else if(time && status){
            findSearch = await getRepository(Booking)
            .whereGreaterOrEqualThan(booking => booking.time_end, time.time_start)
            .whereLessOrEqualThan(booking=> booking.time_start, time.time_end)
            .whereEqualTo(booking => booking.status, status)
            .find()
        }

        return findSearch
    }

    async retreiveBooking(id: string): Promise<Booking>{
        const booking = await getRepository(Booking).findById(id)
        return booking
    }

    private async validateBookingTime(bookingCreate: CreateBookingDto): Promise<boolean>{
        const filterSearch = new GetBookingFilterDto()
        filterSearch.time = {time_start: bookingCreate.time_start, time_end: bookingCreate.time_end}
        const arrayFinded = await this.searchBooking(filterSearch)
        if(arrayFinded.length > 0)
            return false
        return true
    }
}
