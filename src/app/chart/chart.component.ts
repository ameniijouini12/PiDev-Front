import { ChartDataSets } from 'chart.js';
import { FeedbackService } from './../services/feedback.service';
import { EtudiantService } from './../services/etudiant.service';
import { FormationService } from './../services/formation.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



import { EmploiService } from '../services/emploi.service';
import { FormateurService } from '../services/formateur.service';
import { QuestionService } from '../services/question.service';
import { ReponseService } from '../services/reponse.service';

import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  etudiant:any;
  emploi:any;
  formation:any;
  formateur:any;
  question:any;
  feedback:any;
  reponse:any;
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Crude oil prices' },
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','jully', 'august' , 'september', 'october' , 'november', 'december'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor(private _feedback:FeedbackService ,private _reponse:ReponseService,private _question:QuestionService,private _etudiant:EtudiantService,private _formateur:FormateurService, private _formation:FormationService,private _emploi:EmploiService,private router:Router) { }

  ngOnInit(): void {
    this.getemploi();
    this.getformation();
    this.getformateur();
    this.getetudiant();
    this.getquestion();
    this.getreponse();
    this.makeformationStatData();


  }
  makeformationStatData(y='2022'){




      this._formation.getAll().subscribe(

       res=>{

        this.formation = res;


       let j=0;

       let f=0;

       let m=0;

       let a=0;

       let ma=0;

       let ju=0;

       let jui=0;

       let ao=0;

       let s=0;

       let o=0;

       let n=0;

       let d=0;




       for(let i = 0; i<this.formation.length; i++ ){

        let d = this.formation[i].date;




         let date = d.substr(5, 2);

         let year = d.substr(0,4);



         date === '01' && year == y ? j++ :

         date === '02' && year == y ? f++ :

         date === '03' && year == y ? m++ :

         date === '04' && year == y ? a++ :

         date === '05' && year == y ? ma++ :

         date === '06' && year == y ? ju++ :

         date === '07' && year == y ? jui++ :

         date === '08' && year == y ? ao++ :

         date === '09' && year == y ? s++ :

         date === '10' && year == y ? o++ :

         date === '11' && year == y ? n++ :

         date === '12' && year == y ? d++ : null





       }



       this.lineChartData[0].data = [j , f, m , a , ma, ju , jui , ao , s , o , n , d];



       }

      );

     }
  getfeedback(){
    this._feedback.getAll().subscribe(
      (res)=>{
        this.feedback=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getreponse(){
    this._reponse.getAll().subscribe(
      (res)=>{
        this.reponse=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getquestion(){
    this._question.getAll().subscribe(
      (res)=>{
        this.question=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getetudiant(){
    this._etudiant.getAll().subscribe(
      (res)=>{
        this.etudiant=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getemploi(){
    this._emploi.getAll().subscribe(
      (res)=>{
        this.emploi=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getformation(){
    this._formation.getAll().subscribe(
      (res)=>{
        this.formation=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
  getformateur(){
    this._formateur.getAll().subscribe(
      (res)=>{
        this.formateur=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }

}
