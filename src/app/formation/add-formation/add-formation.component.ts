import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Models/Formation';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formation! : Formation
  constructor(public formationService : FormationService) { }

  ngOnInit(): void {
    console.log("formation")
    this.formation = {
      idFormation : null,
      nom : null,
      description : null,
      capaciteMaximale : 0,
      coutParticipation : 0, 
      dateDebut : null,
      dateFin : null,
      lieu :null,
      rating : 0
    }
  }

addFormation(formation : any) {
  this.formationService.ajout(formation).subscribe();
}
}
