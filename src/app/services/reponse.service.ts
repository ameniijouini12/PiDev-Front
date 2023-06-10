import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }
  ajout(reponse:any){
    return this.http.post(this.endpoint.url +'reponse/ajout', reponse);
  }

  getAll(){
    return this.http.get(this.endpoint.url+'reponse/getall');
  }
  delete(id:any){
    return this.http.delete(this.endpoint.url+'reponse/delete/'+id)
  }
  update(id:any,reponse:any){
    return this.http.put(this.endpoint.url+'reponse/update/'+ id, reponse);
  }
  getById(id:any){
    return this.http.get(this.endpoint.url+'reponse/getbyid/'+id);
  }

}
