import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(){ }
  url= 'http://localhost:8080/PIDev/';
}
