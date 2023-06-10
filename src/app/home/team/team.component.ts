import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor( public endpoint:EndpointService , private router:Router , private  _formateur : FormateurService) { }
formateur:any;
  ngOnInit(): void {
    this._formateur.getAll().subscribe(
      (res)=>{
        this.formateur=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }

}
