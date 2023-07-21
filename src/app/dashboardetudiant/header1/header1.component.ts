import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EndpointService } from '../../services/endpoint.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor(private router : Router , private UserService : UserService , private route : ActivatedRoute, private auth: AuthService,public endpoint:EndpointService) { }
  id:any;

  etudiant : any;
  image : any;


  ngOnInit(): void {
    this.id = this.auth.getUserData()._id;
    this.getbyid();

  }
  getbyid(){


    this.UserService.getById(this.id).subscribe(
      res=>{
        this.etudiant = res;
        console.log(this.etudiant);


      }
    )
  }


  selectedimage(event:any){
    this.image=event.target.files[0];

  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }



}
