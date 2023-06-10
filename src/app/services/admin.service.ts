import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  getById(id:any){

    return this.http.get(this.endpoint.url+'admin/getbyid/'+ id);
  }
  update(id:any,admin:any){
    return this.http.put(this.endpoint.url+'admin/update/'+ id, admin);
  }

}
