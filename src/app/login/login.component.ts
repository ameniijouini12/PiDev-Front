import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService,private router:Router) { }

  user ={
    email:'',
    password:''
  }

  selected = '3';




  token : any;
  tokenetudiant : any;
  login(){


    if(this.selected == '1'){
      this._auth.login(this.user).subscribe(
        (res)=>{
          console.log('usr');


        console.log(res);
        this.token= res;
        localStorage.setItem('token',this.token.myToken);
        this.router.navigate(['/dashboard']);
        },
        err=>{
          console.log(err);


        }
      );
    }else if(this.selected == '2'){
      this._auth.loginformateur(this.user).subscribe(
        (res)=>{

        console.log(res);
        this.tokenetudiant= res;
        localStorage.setItem('token',this.tokenetudiant.myToken);
        this.router.navigate(['/dashboardformateur']);
        },
        err=>{
          console.log(err);


        }
      );

    }
    else{
      this._auth.loginetudiant(this.user).subscribe(
        (res)=>{

        console.log(res);
        this.tokenetudiant= res;
        localStorage.setItem('token',this.tokenetudiant.myToken);
        this.router.navigate(['/dashboardetudiant']);
        },
        err=>{
          console.log(err);


        }
      );

    }




  }




  ngOnInit(): void {
  }



}
