import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  ajout(formation: any) : Observable<any>{
    return this.http.post<any>(this.endpoint.url + 'Formation/add-Formation', formation);
  }
  
 getAll(){
  return this.http.get(this.endpoint.url+'Formation/retrieve-all-formations');
}
delete(idFormation:any){
  return this.http.delete(this.endpoint.url+'Formation/remove-Formation/'+idFormation);
}
update(id:any,formation:any){
  return this.http.put(this.endpoint.url+'formation/update/'+ id, formation);
}
getById(id:any){
  return this.http.get(this.endpoint.url+'Formation/retrieve-formations/'+id);
}
getByformationbyidformateur(id:any){
  return this.http.get(this.endpoint.url+'formation/getformationbyformateur/'+id);
}
getformationbyetudiant(id:any){
  return this.http.get(this.endpoint.url+'formation/getformationbyetudiant/'+id);
}
getByIdforma(id:any){
  return this.http.get(this.endpoint.url+'formation/getbyformateur/'+id);
}
}
