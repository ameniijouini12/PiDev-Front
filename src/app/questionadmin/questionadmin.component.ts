import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EndpointService } from '../services/endpoint.service';
import { EtudiantService } from '../services/etudiant.service';
import { FormateurService } from '../services/formateur.service';
import { QuestionService } from '../services/question.service';
import { ReponseService } from '../services/reponse.service';

@Component({
  selector: 'app-questionadmin',
  templateUrl: './questionadmin.component.html',
  styleUrls: ['./questionadmin.component.css']
})
export class QuestionadminComponent implements OnInit {

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


}


