import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http : HttpClient, private endpoint:EndpointService) { }
  ajout(feedback:any){
    return this.http.post(this.endpoint.url +'feedback/ajout', feedback);
  }

  getAll(){
    return this.http.get(this.endpoint.url+'feedback/getall');
  }
  delete(id:any){
    return this.http.delete(this.endpoint.url+'feedback/delete/'+id)
  }
  update(id:any,feedback:any){
    return this.http.put(this.endpoint.url+'feedback/update/'+ id, feedback);
  }
  getById(id:any){
    return this.http.get(this.endpoint.url+'feedback/getbyid/'+id);
  }

}
