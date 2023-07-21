import { Component, OnInit } from '@angular/core';
import {Booking} from "../Models/booking";
import {BookingService} from "../services/booking.service";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingService.getAllBookings().subscribe(
      (response: Booking[]) => {
        this.bookings = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addBooking(eventId: number, userId: number): void {
    this.bookingService.addBooking(eventId, userId).subscribe(
      () => {
        console.log('Booking added successfully.');
        // Refresh the bookings list if needed
        this.getAllBookings();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Implement other methods as needed (e.g., updateBooking, deleteBooking, etc.)
}
