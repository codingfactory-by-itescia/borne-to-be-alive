import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import {CreateBookingDto, GetBookingFilterDto} from './dto'

@Controller('booking')
export class BookingController {
    constructor(readonly bookingService: BookingService){}

    @Post()
    createBooking(@Body() createBookingDto: CreateBookingDto){
        return this.bookingService.createBooking(createBookingDto);
    }

    @Get()
    findAllTickets(@Query() filterDto: GetBookingFilterDto){
        if(Object.keys(filterDto).length > 0)
            return this.bookingService.searchBooking(filterDto)
        return this.bookingService.findAllBookings();
    }

    @Get(':id')
    findOneBooking(@Param('id') id: string){
        return this.bookingService.retreiveBooking (id);
    }

}
