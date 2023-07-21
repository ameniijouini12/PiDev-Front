import {User} from "./user";

export class Booking {
  idBooking!: number;
  user!: User;
  event!: Event;
  state!: boolean;
  price!: number;
}
