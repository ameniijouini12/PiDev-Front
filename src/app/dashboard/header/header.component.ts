import { EndpointService } from 'src/app/services/endpoint.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router , private adminservice : AdminService , private route : ActivatedRoute, private auth: AuthService,public endpoint:EndpointService) { }
  id:any;

  admin : any;
  image : any;


  ngOnInit(): void {
    this.id = this.auth.getUserData()._id;
    console.log(this.id);

    this.getbyid();

  }
  getbyid(){


    this.adminservice.getById(this.id).subscribe(
      res=>{
        this.admin = res;
        console.log(this.admin);


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
