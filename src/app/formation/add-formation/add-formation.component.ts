import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Formation } from 'src/app/Models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  formationForm!: FormGroup;
  formation!: Formation ;

  constructor(
    private formBuilder: FormBuilder,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formationForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      lieu: ['', Validators.required],
      capaciteMaximale: ['', Validators.required ,Validators.pattern('^[0-9]*$')],
    
      coutParticipation: ['', Validators.required]
    });
  }

  addFormation(): void {
    if (this.formationForm.invalid) {
      // Mark all form controls as touched to display validation errors
      this.formationForm.markAllAsTouched();
      return;
    }

    // Create a Formation object and assign form values to it
    this.formation = {
      idFormation: null,
      nom: this.formationForm.value.nom,
      description: this.formationForm.value.description,
      capaciteMaximale: this.formationForm.value.capaciteMaximale,
      coutParticipation: this.formationForm.value.coutParticipation,
      dateDebut: this.formationForm.value.dateDebut,
      dateFin: this.formationForm.value.dateFin,
      lieu: this.formationForm.value.lieu,
      rating: this.formationForm.value.rating
    };

    this.formationService.ajout(this.formation).subscribe();
  }
}
