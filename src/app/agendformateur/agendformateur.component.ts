import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FormationService } from '../services/formation.service';
import { EmploiService } from '../services/emploi.service';

@Component({
  selector: 'app-agendformateur',
  templateUrl: './agendformateur.component.html',
  styleUrls: ['./agendformateur.component.css']
})
export class AgendformateurComponent implements OnInit {

  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  constructor(  private _Session: EmploiService , private auth : AuthService) { }
  emploi:any
  session:any;
  id:any;

  ngOnInit(): void {
 
    this.getallemplois();

  }
  getallemplois(){



    this._Session.getAll().subscribe(
      response=>{
        this.session=response;
        console.log(this.session);

        for(let e of this.session){
          this.Events.push( {  title: e.titre, start: e.dateDebut, end: e.dateFin , display: 'color'  } )
        }
        this.calendarOptions.events = this.Events;
      },
      (err)=>{
        console.log(err);

      }
    )
  }



}
