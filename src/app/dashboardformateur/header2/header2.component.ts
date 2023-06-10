import { FormateurService } from './../../services/formateur.service';
import { EtudiantService } from './../../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private router : Router , private formateurservice : FormateurService , private route : ActivatedRoute, private auth: AuthService,public endpoint:EndpointService) { }
  id:any;

  formateur : any;
  image : any;


  ngOnInit(): void {
    this.id = this.auth.getUserData()._id;
    this.getbyid();

  }
  getbyid(){


    this.formateurservice.getById(this.id).subscribe(
      res=>{
        this.formateur = res;
        console.log(this.formateur);


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
