import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

import {Event} from "../../Models/event";

import { EventService } from './../../services/Event.service';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private _evenement:EventService,private router:Router) { }
  event:any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  f! : Event;

  ngOnInit(): void {
    console.log("event");
  }

  // image:any;



  /* selectedimage(event:any){
     this.image=event.target.files[0];

   }*/

  ajout(){
    let f =new FormData();
    f.append('nom',this.event.nom);
    f.append('description',this.event.description);
    f.append('dateDebut',this.event.dateDebut);
    f.append('dateFin',this.event.dateFin);
    f.append('lieu',this.event.lieu);
    f.append('rating',this.event.rating.toString());

    f.append('coutParticipation',this.event.coutParticipation.toString());


    this._evenement.ajout(f).subscribe(
      ()=>{
        console.log(f);
        this.router.navigate(['/dashboard/list-event'])
      },
      err=>{
        console.log(err);

      }
    )

  }

  ajouter(f1 : any){
    console.log(f1);
    this._evenement.ajout(f1).subscribe(() => console.log(f1));
  }
  selected = "----"

  update(e:any){
    this.selected = e.target.value
  }



}
