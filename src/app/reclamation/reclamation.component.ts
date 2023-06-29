import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from '../services/endpoint.service';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamations:any;
  constructor(public endpoint:EndpointService , private router:Router , private  _reclamation : ReclamationService) {
    
   }

  ngOnInit(): void {
    this._reclamation.getAll().subscribe(
      (res)=>{
        this.reclamations=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }
  



  showDetails(id: number) {
    // Ajoutez votre logique pour afficher les détails de la réclamation correspondant à l'ID
    
  }
}
