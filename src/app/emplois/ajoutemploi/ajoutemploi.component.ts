import { FormationService } from './../../services/formation.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-ajoutemploi',
  templateUrl: './ajoutemploi.component.html',
  styleUrls: ['./ajoutemploi.component.css']
})
export class AjoutemploiComponent implements OnInit {

  constructor( private datepipe :DatePipe,  private formBuilder: FormBuilder,private router:Router,private _emploi:EmploiService,private _formation:FormationService) { }

  ngOnInit(): void {
    this._formation.getAll().subscribe(
      (res)=>{
        this.formation=res;
      },
      (err)=>{
        console.log(err);

      }
    )


  }


  formation:any;
  emploi={
   title:'',
   description:'',

   dateheure:'',
   enddate:'',

   id_Formation:''
  };

   ajout(){
     console.log(this.emploi.dateheure);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre travail a été enregistré',
      showConfirmButton: false,
      timer: 1500
    })


    this._emploi.ajout(this.emploi).subscribe(
      (res)=>{
        console.log(this.emploi.title);

        console.log(this.emploi.description);

    console.log(res);
    this.router.navigate(['/dashboard/list-emploi'])
      },
      err=>{
        console.log(err);

      }
    )

  }


}
