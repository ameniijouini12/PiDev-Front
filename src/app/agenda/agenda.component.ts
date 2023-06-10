import { AuthService } from './../services/auth.service';
import { FormationService } from 'src/app/services/formation.service';
import { EmploiService } from 'src/app/services/emploi.service';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
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
  constructor(private _emploi:EmploiService,private _formation:FormationService , private auth:AuthService) { }
  emploi:any
  formation:any
 id:any

  ngOnInit(): void {
    this.id=this.auth.getUserData()._id;
    this.getallemplois();

  }
  getallemplois(){
    this._formation.getformationbyetudiant(this.id).subscribe(

      response=>{
        
        this.formation=response;
        console.log(this.formation);

        for(let l of this.formation){
          this.Events.push( { title: l.title , start: l.dateheure , end: l.enddate , display: 'color'} )

        }
        this.calendarOptions.events = this.Events;

      },
      error=>{
        console.log(error);


      }
    )
  }


}
