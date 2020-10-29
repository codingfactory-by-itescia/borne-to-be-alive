import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto, GetBookingFilterDto } from './dto';
import { getRepository } from 'fireorm';
import { Booking, BookingStatus} from './dto/booking.model'
import { v4 as uuidv4 } from 'uuid';
import { TypeUser } from './dto/create-booking';

@Injectable()
export class BookingService {

    async createBooking(booking: CreateBookingDto): Promise<Booking>{

        const newBooking = new Booking()
        newBooking.id = uuidv4()
        newBooking.status = BookingStatus.BOOKED
        newBooking.time_start = booking.time_start
        newBooking.day = booking.day
        newBooking.day_of_week = booking.day_of_week
        newBooking.month = booking.month


        if(this.validateBookingTime(newBooking)){
            throw new BadRequestException('There is already a reservation at this time.')
        }

        if(booking.type === TypeUser.IDENTIFY){
            newBooking.first_name = booking.first_name
            newBooking.last_name = booking.last_name
            newBooking.vitalId = booking.vitalId
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
            .whereGreaterOrEqualThan(booking => booking.time_start, time.time_start)
            .whereLessOrEqualThan(booking=> booking.time_start + (30 * 60 * 1000), time.time_start)
            .find()
        }
        else if(time && status){
            findSearch = await getRepository(Booking)
            .whereGreaterOrEqualThan(booking => booking.time_start, time.time_start)
            .whereLessOrEqualThan(booking=> booking.time_start +  (30 * 60 * 1000), time.time_start)
            .whereEqualTo(booking => booking.status, status)
            .find()
        }

        return findSearch
    }

    async retreiveBooking(id: string): Promise<Booking>{
        const booking = await getRepository(Booking).findById(id)
        return booking
    }

    private async validateBookingTime(bookingCreate: Booking): Promise<boolean>{
        const filterSearch = new GetBookingFilterDto()
        filterSearch.time = {time_start: bookingCreate.time_start}
        const arrayFinded = await this.searchBooking(filterSearch)
        if(arrayFinded.length > 0)
            return false
        return true
    }
}
