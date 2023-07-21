import {Booking} from "../../../../../PI/PiDev-Front/src/app/Models/booking";

export class User {
  idUser!: number;
  nom!: string;
  prenom!: string;
  mail!: string;
  num!: string;
  password!: string;
  role!: Role;
  bookings!: Booking[];
}

export enum Role {
  // Définissez les différents rôles possibles ici
}
