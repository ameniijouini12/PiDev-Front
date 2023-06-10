import { EndpointService } from './../services/endpoint.service';
import { FormateurService } from './../services/formateur.service';
import { ReponseService } from './../services/reponse.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  image : any;
  id : any;
  list : any;
  listr : any;
  etudiant : any;
  formateur : any;
  response : any;
    constructor( public endpoint:EndpointService,private questionservice : QuestionService, private auth:AuthService,private etudiantservice : EtudiantService, private router:Router , private reponseservice : ReponseService , private formateurservice : FormateurService) { }

    ngOnInit(): void {
      this.id=this.auth.getUserData()._id;
      this.getQuestion();
      this.getbyid();
      this.getallreponse();
      this.getbyidformateur();
    }

    getQuestion(){
      this.questionservice.getAll().subscribe(
        response=>{
          this.list=response;
          console.log(this.list);

        },
        error=>{
          console.log(error);


        }
      )
    }

   selectedimage(event:any){
    this.image=event.target.files[0];

  }

  getbyid(){


    this.etudiantservice.getById(this.id).subscribe(
      res=>{
        this.etudiant = res;
        console.log(this.etudiant);


      }
    )
  }
  getbyidformateur(){


    this.formateurservice.getById(this.id).subscribe(
      res=>{
        this.formateur= res;
        console.log(this.formateur);


      }
    )
  }


    question={
      title:'',
      description:'',
      idUser:''
    }

    ajout(){

      this.question.idUser=this.id;
      this.questionservice.ajout(this.question).subscribe(
        (res)=>{

          this.ngOnInit();
          this.question = {
            title:'',
            description:'',
            idUser:''

            }



        },
        err=>{
          console.log(err);

        }
      )
    }
    delete(id:any){

          this.questionservice.delete(id).subscribe(
            res=>{

              this.ngOnInit();


            },
            err=>{
              console.log(err);

            }
          );




  }
  getallreponse(){
    this.reponseservice.getAll().subscribe(
      response=>{
        this.listr=response;
        console.log(this.listr);

      },
      error=>{
        console.log(error);


      }
    )
  }






  reponse={
    idQuestion:'',
    idUser:'',
    text:'',
  }

  ajoutreponse(id:any){

    this.reponse.idUser=this.id;
    this.reponse.idQuestion= id;


    this.reponseservice.ajout(this.reponse).subscribe(
      (res)=>{

        this.ngOnInit();
        this.reponse = {
          idQuestion:'',
           idUser:'',
            text:'',

          }



      },
      err=>{
        console.log(err);

      }
    )
  }
}
