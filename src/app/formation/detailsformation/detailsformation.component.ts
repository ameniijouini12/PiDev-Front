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

  formation !:Formation;
  idFormation :any;

  listformation : any;
  formateur:any



  constructor(public endpoint:EndpointService,private formateurs :FormateurService,private _formation :FormationService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getbyid();
    this.getformation();

  }
getformateurbyid(id:any){
  this.formateurs.getById(id).subscribe(
    (res)=>{
    console.log(res);
  this.formateur=res;}


  )

}

  getbyid(){
    this.idFormation = this.route.snapshot.paramMap.get('idFormation');
    this._formation.getById(this.idFormation).subscribe(
    
    )
  }
  getformation(){
    this._formation.getAll().subscribe( (res)=>{
      this.listformation=res;
      console.log(res);

    },
    ( err) =>{
      console.log(err);

    })

 }
  image:any;

  selectedimage(event:any){
    this.image=event.target.files[0];

  }




}
