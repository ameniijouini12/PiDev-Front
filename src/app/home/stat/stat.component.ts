import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  etudiant:any;
  formateur:any;
  formation:any;
  emploi:any

  constructor(private _etudiant:EtudiantService,private _formateur:FormateurService,private _emploi:EmploiService, private _formation:FormationService,private router:Router) { }

  ngOnInit(): void {
    this.getformation();
    this.getformateur();
    this.getetudiant();
    this.getemploi();
  }
  getemploi(){
    this._emploi.getAll().subscribe(
      (res)=>{
        this.emploi=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getetudiant(){
    this._etudiant.getAll().subscribe(
      (res)=>{
        this.etudiant=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getformateur(){
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
  getformation(){
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
