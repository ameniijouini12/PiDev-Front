import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FormationService } from '../services/formation.service';

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
  constructor(  private _formation: FormationService , private auth : AuthService) { }
  emploi:any
  formation:any;
  id:any;

  ngOnInit(): void {
    this.id=this.auth.getUserData()._id;
    this.getallemplois();

  }
  getallemplois(){



    this._formation.getByformationbyidformateur(this.id).subscribe(
      response=>{
        this.formation=response;
        console.log(this.formation);

        for(let e of this.formation){
          this.Events.push( {  title: e.title, start: e.dateheure, end: e.enddate , display: 'color'  } )
        }
        this.calendarOptions.events = this.Events;
      },
      (err)=>{
        console.log(err);

      }
    )
  }



}
