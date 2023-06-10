import { EndpointService } from 'src/app/services/endpoint.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-detailsformation',
  templateUrl: './detailsformation.component.html',
  styleUrls: ['./detailsformation.component.css']
})
export class DetailsformationComponent implements OnInit {

  formation :any;
  id :any;

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
    this.id = this.route.snapshot.paramMap.get('id');
    this._formation.getById(this.id).subscribe(
      res=>{
        this.formation = res;
        this.getformateurbyid(this.formation.formateur)
        console.log(this.formation.formateur);

        console.log(res);



      }
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
