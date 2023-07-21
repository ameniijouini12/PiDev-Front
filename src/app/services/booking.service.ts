import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/api/bookings'; // Replace with your Spring API base URL

  constructor(private http: HttpClient) { }

  addBooking(eventId: number, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}`, { eventId, userId });
  }

  updateBooking(booking: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${booking.bookingId}`, booking);
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${bookingId}`);
  }

  getBookingById(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${bookingId}`);
  }

  getBookingsByType(type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/type/${type}`);
  }
}
