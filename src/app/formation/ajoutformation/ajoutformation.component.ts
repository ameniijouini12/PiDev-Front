import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from './../../services/formateur.service';
import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent implements OnInit {
  

  constructor(private _formation:FormationService,private router:Router,private _formateur:FormateurService,private _etudiant:EtudiantService) { }
  formateur:any;
  etudiant:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  ngOnInit(): void {
   


  }
  







  image:any;
  formation={
    nom:'',
   description:'',
   dateDebut:'',
   dateFin:'',
   lieu:'',
   capaciteMaximale:'',
   idFormateur:'',

   coutParticipation:'',
   Rating:'',

 
 
  }
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  ajout(){
    let f =new FormData();
    f.append('nom',this.formation.nom);
    f.append('description',this.formation.description);
    f.append('dateDebut',this.formation.dateDebut);
    f.append('dateFin',this.formation.dateFin);
    f.append('lieu',this.formation.lieu);
    f.append('rating',this.formation.Rating);
    f.append('idFormateur',this.formation.idFormateur);
    f.append('coutParticipation',this.formation.coutParticipation.toString());
    f.append('capaciteMaximale',this.formation.capaciteMaximale.toString());


    this._formation.ajout(f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-formation'])
      },
      err=>{
        console.log(err);

      }
    )

  }
  selected = "----"

  update(e:any){
    this.selected = e.target.value
  }

}
