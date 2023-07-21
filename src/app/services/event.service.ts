
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EndpointService} from "./endpoint.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  ajout(event: any) : Observable<any>{
    return this.http.post<any>(this.endpoint.url + 'Event/add-Event', event);
  }

  getAll(){
    return this.http.get(this.endpoint.url+'Event/retrieve-all-Events');
  }
  delete(idEvent:any){
    return this.http.delete(this.endpoint.url+'Event/remove-Event/{Event-id}'+idEvent );
  }
  update(idEvent:any,event:any){
    return this.http.put(this.endpoint.url+'Event/update-Event'+ idEvent, event);
  }
  getById(idEvent:any){
    return this.http.get(this.endpoint.url+'event/retrieve-Events/'+idEvent);
  }
  /*getByformationbyidformateur(id:any){
    return this.http.get(this.endpoint.url+'event/getformationbyformateur/'+id);
  }
  getformationbyetudiant(id:any){
    return this.http.get(this.endpoint.url+'event/getformationbyetudiant/'+id);
  }
  getByIdforma(id:any){
    return this.http.get(this.endpoint.url+'event/getbyformateur/'+id);
  }*/
}

