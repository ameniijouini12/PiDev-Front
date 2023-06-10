import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class EdepotService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }
  ajout(depot:any){


    return this.http.post(this.endpoint.url +'espacedepot/ajout', depot);
  }

  getAll(){
    return this.http.get(this.endpoint.url+'espacedepot/getall');
  }
  delete(id:any){
    return this.http.delete(this.endpoint.url+'espacedepot/delete/'+id)
  }
  update(id:any,depot:any){
    return this.http.put(this.endpoint.url+'espacedepot/update/'+ id, depot);
  }
  getById(id:any){
    return this.http.get(this.endpoint.url+'espacedepot/getbyid/'+id);
  }
  getByIdEtudiant(id:any){
    return this.http.get(this.endpoint.url+'espacedepot/getbyidformateur/'+id);
  }

}
