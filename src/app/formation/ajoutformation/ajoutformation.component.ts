import { UserService } from 'src/app/services/user.service';
import { FormateurService } from './../../services/formateur.service';
import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Formation } from 'src/app/Models/Formation';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent implements OnInit {
  

  constructor(private _formation:FormationService,private router:Router,private _formateur:FormateurService,private _etudiant:UserService) { }
  formateur:any;
  etudiant:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  formation :any
  f! : Formation;

  ngOnInit(): void {
    console.log("formation");
  }
  
 // image:any;


  
 /* selectedimage(event:any){
    this.image=event.target.files[0];

  }*/

  ajout(){
    let f =new FormData();
    f.append('nom',this.formation.nom);
    f.append('description',this.formation.description);
    f.append('dateDebut',this.formation.dateDebut);
    f.append('dateFin',this.formation.dateFin);
    f.append('lieu',this.formation.lieu);
    f.append('rating',this.formation.rating.toString());
    
    f.append('coutParticipation',this.formation.coutParticipation.toString());


    this._formation.ajout(f).subscribe(
      ()=>{
    console.log(f);
    this.router.navigate(['/dashboard/list-formation'])
      },
      err=>{
        console.log(err);

      }
    )

  }

  ajouter(f1 : any){
    console.log(f1);
    this._formation.ajout(f1).subscribe(() => console.log(f1));
  }
  selected = "----"

  update(e:any){
    this.selected = e.target.value
  }

}
