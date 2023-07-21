import { EndpointService } from './endpoint.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8081/PIDev/AUTH/auth/";

  constructor(private http : HttpClient) { }

  ajout(user:any){
    return this.http.post(this.url +'add-user', user);
 }
 getAllUsers(){
  return this.http.get(this.url+'retrieve-all-users');
}
delete(id:any){
  return this.http.delete(this.url+'remove-user/'+id)
}
update(id:any,user:any){
  return this.http.put(this.url+'UserUpdate/'+ id, user);
}
getById(id:any){
  return this.http.get(this.url+'retrieve-user/'+id);
}

blockUnblock(id:any){
  return this.http.put(this.url+'enable-user-status/'+id, null, { responseType: 'text' });
}


register(user:any){
  return this.http.post(this.url +'register', user);
}

getAll() {
  return new Observable();
}

}
