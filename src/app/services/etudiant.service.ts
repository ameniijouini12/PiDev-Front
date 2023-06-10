import { EndpointService } from './endpoint.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  ajout(etudiant:any){
    return this.http.post(this.endpoint.url +'etudiant/ajout', etudiant);
 }
 getAll(){
  return this.http.get(this.endpoint.url+'etudiant/getall');
}
delete(id:any){
  return this.http.delete(this.endpoint.url+'etudiant/delete/'+id)
}
update(id:any,etudiant:any){
  return this.http.put(this.endpoint.url+'etudiant/update/'+ id, etudiant);
}
getById(id:any){
  return this.http.get(this.endpoint.url+'etudiant/getbyid/'+id);
}

}
