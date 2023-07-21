import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../Models/Notification'; 

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  userId = 1; // Remplacez par l'ID de l'utilisateur réel
  notificationContent!: string; // Utilisez l'opérateur "!" pour indiquer que notificationContent sera assignée
  userNotifications: Notification[] = []; // Utilisez userNotifications pour stocker les notifications de l'utilisateur

  constructor(private notificationService: NotificationService) {}

  sendNotification() {
    this.notificationService.sendNotification(this.userId, this.notificationContent).subscribe(() => {
      // Réinitialiser le contenu de la notification après l'envoi
      this.notificationContent = '';

      // Actualiser la liste des notifications de l'utilisateur après l'envoi
      this.loadUserNotifications();
    });
  }

  loadUserNotifications() {
    this.notificationService.getAllNotificationsForUser(this.userId).subscribe(notifications => {
   
    });
  }
}
