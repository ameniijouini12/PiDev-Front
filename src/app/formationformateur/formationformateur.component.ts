import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EndpointService } from '../services/endpoint.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formationformateur',
  templateUrl: './formationformateur.component.html',
  styleUrls: ['./formationformateur.component.css']
})
export class FormationformateurComponent implements OnInit {

  id:any;
  formation:any;
  constructor(public endpoint:EndpointService , private router:Router , private  _formation : FormationService, private auth : AuthService) { }

  ngOnInit(): void {
    this.id=this.auth.getUserData()._id;
   this.getbyforma()

  }
  getbyforma() {
    this._formation.getByIdforma(this.id).subscribe(
      (res)=>{
        this.formation=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  };
}
