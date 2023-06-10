import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';


@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  ajout(emploi:any){
    return this.http.post(this.endpoint.url +'emploi/ajout', emploi);
 }
 getAll(){
  return this.http.get(this.endpoint.url+'emploi/getall');
}
delete(id:any){
  return this.http.delete(this.endpoint.url+'emploi/delete/'+id)
}
update(id:any,emploi:any){
  return this.http.put(this.endpoint.url+'emploi/update/'+ id, emploi);
}
getById(id:any){
  return this.http.get(this.endpoint.url+'emploi/getbyid/'+id);
}

}
