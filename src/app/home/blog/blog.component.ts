import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private formateurs :FormateurService,public endpoint:EndpointService , private router:Router , private  _formation : FormationService) { }
 formation:any;
 list:any
 getformateurbyid(id:any){
  this.formateurs.getById(id).subscribe(
    (res)=>{
      this.getformateurbyid(this.formation.formateur)
    console.log(res);
  this.list=res;}


  )

}
  ngOnInit(): void {
    this._formation.getAll().subscribe(
      (res)=>{
        this.formation=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }

}
