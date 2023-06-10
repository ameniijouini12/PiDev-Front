import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajoutfeedback',
  templateUrl: './ajoutfeedback.component.html',
  styleUrls: ['./ajoutfeedback.component.css']
})
export class AjoutfeedbackComponent implements OnInit {
  feedback={
    id_User:'',
    text:'',
    id_Formation:''}
  constructor( private router:Router , private  _feedback : FeedbackService,private _formation:FormationService,private _auth:AuthService) { }

  id:any;
  formation:any;
  ngOnInit(): void {
    this.id = this._auth.getUserData()._id;
    this.getformation();

  }
  getformation(){
    this._formation.getAll().subscribe(
      response=>{
        this.formation=response;
      },
      error=>{
        console.log(error);

      }
    )
  }
  ajout(){
    this.feedback.id_User=this.id;


    this._feedback.ajout(this.feedback).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboardetudiant'])
      },
      err=>{
        console.log(err);

      }
    )

  }

}
