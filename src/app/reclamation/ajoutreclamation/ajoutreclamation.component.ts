import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutreclamation',
  templateUrl: './ajoutreclamation.component.html',
  styleUrls: ['./ajoutreclamation.component.css']
})
export class AjoutreclamationComponent implements OnInit {

  reclamation: Reclamation = new Reclamation();
  fileToUpload: File | null = null;

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
  }

 
  onSubmit(): void {
    // Envoyer la réclamation au backend via le service
    this.reclamationService.ajout(this.reclamation).subscribe(
      (response) => {
        // Réinitialiser le formulaire après l'envoi
        this.reclamation = new Reclamation();
        // Afficher le swal en cas de succès
        Swal.fire('Reclamation bien enregistrer!', '', 'success');
      },
      (error) => {
        // Gérer les erreurs ici si nécessaire
        
      }
    );
  }
}
