import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Models/Formation';
import { FormationService } from 'src/app/services/formation.service';


@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  image!: File;
  formation!: Formation;

  constructor(public formationService: FormationService) { }

  ngOnInit(): void {
    this.formation = {
      idFormation: null,
      nom: null,
      description: null,
      capaciteMaximale: 0,
      coutParticipation: 0,
      dateDebut: null,
      dateFin: null,
      lieu: null,
      rating: 0
    };
  }

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

  addFormation(formation: Formation) {
    const formData = new FormData();
    formData.append('image', this.image); // Ajoutez l'image à FormData
    formData.append('formation', JSON.stringify(formation)); // Ajoutez les données de la formation à FormData

    this.formationService.ajout(formData).subscribe(
      () => {
        // Réinitialisez les valeurs après l'ajout de la formation
        this.image ;
        this.formation = {
          idFormation: null,
          nom: null,
          description: null,
          capaciteMaximale: 0,
          coutParticipation: 0,
          dateDebut: null,
          dateFin: null,
          lieu: null,
          rating: 0
        };
      },
      (error) => {
        console.log(error);
        // Gérez les erreurs d'ajout de formation ici
      }
    );
  }
}
