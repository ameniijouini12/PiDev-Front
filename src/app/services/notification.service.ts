import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8080/PIDev/notifications'; 

  constructor(private http: HttpClient) { }

  sendNotification(userId: number, content: string): Observable<void> {
    const url = `${this.apiUrl}/${userId}/send`;
    return this.http.post<void>(url, content);
  }

  getAllNotificationsForUser(userId: number): Observable<Notification[]> {
    const url = `${this.apiUrl}/${userId}/all`;
    return this.http.get<Notification[]>(url);
  }
}
