import { Injectable } from '@angular/core';
const baseUrli = 'http://localhost:8000/formateur';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http:HttpClient, private endpoint : EndpointService) { }
  ajout(formateur:any){
    return this.http.post(this.endpoint.url +'formateur/ajout', formateur);
 }
 getAll(){
  return this.http.get(this.endpoint.url+'formateur/getall');
}
delete(id:any){
  return this.http.delete(this.endpoint.url+'formateur/delete/'+id)
}
update(id:any,formateur:any){
  return this.http.put(this.endpoint.url+'formateur/update/'+ id, formateur);
}
getById(id:any){
  return this.http.get(this.endpoint.url+'formateur/getbyid/'+id);
}
}
