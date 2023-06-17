import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient , private endpoint:EndpointService) { }

  ajout(Event:any){
    return this.http.post(this.endpoint.url +'Event/add-Event', Event);
 }
 getAll(){
  return this.http.get(this.endpoint.url+'Event/retrieve-all-Events');
}
delete(id:any){
  return this.http.delete(this.endpoint.url+'Event/delete/'+id)
}
update(id:any,Event:any){
  return this.http.put(this.endpoint.url+'Event/update/'+ id, Event);
}
getById(id:any){
  return this.http.get(this.endpoint.url+'Event/getbyid/'+id);
}

}
