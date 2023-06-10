import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }
  ajout(question:any){
    return this.http.post(this.endpoint.url +'question/ajout', question);
  }

  getAll(){
    return this.http.get(this.endpoint.url+'question/getall');
  }
  delete(id:any){
    return this.http.delete(this.endpoint.url+'question/delete/'+id)
  }
  update(id:any,question:any){
    return this.http.put(this.endpoint.url+'question/update/'+ id, question);
  }
  getById(id:any){
    return this.http.get(this.endpoint.url+'question/getbyid/'+id);
  }

}
