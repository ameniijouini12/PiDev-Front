import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  ajout(reclamation: any) {
    return this.http.post<any>(this.endpoint.url + 'Reclamation/add-Reclamation', reclamation);
  }
  
 getAll(){
  return this.http.get(this.endpoint.url+'Reclamation/retrieve-all-Reclamations');
}
delete(idreclamation:any){
  return this.http.delete(this.endpoint.url+'Reclamation/remove-reclamation/'+idreclamation);
}
update(id:any,reclamation:any){
  return this.http.put(this.endpoint.url+'Reclamation/update/'+ id, reclamation);
}
getById(idreclamation:any){
  return this.http.get(this.endpoint.url+'Reclamation/retrieve-reclamations/'+idreclamation);
}



}
