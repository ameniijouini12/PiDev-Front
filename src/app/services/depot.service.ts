import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class DepotService {


  constructor(private http : HttpClient, private endpoint:EndpointService) { }
  ajout(depot:any){


    return this.http.post(this.endpoint.url +'depot/ajout', depot);
  }

  getAll(){
    return this.http.get(this.endpoint.url+'depot/getall');
  }
  delete(id:any){
    return this.http.delete(this.endpoint.url+'depot/delete/'+id)
  }
  update(id:any,depot:any){
    return this.http.put(this.endpoint.url+'depot/update/'+ id, depot);
  }
  getById(id:any){
    return this.http.get(this.endpoint.url+'depot/getbyid/'+id);
  }
  getByIdEtudiant(id:any){
    return this.http.get(this.endpoint.url+'depot/getbyidetudiant/'+id);
  }
  getByIdFormateur(id:any){
    return this.http.get(this.endpoint.url+'depot/getbyidformateur/'+id);
  }
}
