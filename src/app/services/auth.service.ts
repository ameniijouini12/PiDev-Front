import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private endpoint : EndpointService) { }

login(admin:any){
  return this.http.post(this.endpoint.url+'admin/login',admin);
}
loginetudiant(etudiant:any){
  return this.http.post(this.endpoint.url+'etudiant/login',etudiant);
}
loginformateur(formateur:any){
  return this.http.post(this.endpoint.url+'formateur/login',formateur);
}
isLoggedIn(){
  let token= localStorage.getItem('token');
  if(token){
    return true;
  }else{
    return false;
  }
}


getUserData(){

  let token = localStorage.getItem('token');

  if(token){

    let data = JSON.parse( window.atob( token.split('.')[1] ) )
    //console.log('vbjjj');

    console.log(data);

    return data;


  }
}
getformateurData(){

  let token = localStorage.getItem('tknform');

  if(token){

    let data = JSON.parse( window.atob( token.split('.')[1] ) )
    return data;


  }
}
getetudiantData(){

  let token = localStorage.getItem('tknetud');

  if(token){

    let data = JSON.parse( window.atob( token.split('.')[1] ) )
    return data;


  }
}
}
