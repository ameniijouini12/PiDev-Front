import { EndpointService } from 'src/app/services/endpoint.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { Formation } from 'src/app/Models/Formation';

@Component({
  selector: 'app-detailsformation',
  templateUrl: './detailsformation.component.html',
  styleUrls: ['./detailsformation.component.css']
})
export class DetailsformationComponent implements OnInit {

  formation :any;
  idFormation :any;

  listformation : any;
  formateur:any



  constructor(public endpoint:EndpointService,private formateurs :FormateurService,private _formation :FormationService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getbyid();
  

  }


    // C

  getbyid(){
    this.idFormation = this.route.snapshot.paramMap.get('id');
    console.log(this.idFormation+'ggggg')
    this._formation.getById(this.idFormation).subscribe(
      res=>{
        this.formation = res;
        console.log(this.idFormation)
      }
    )
  }
 



}
