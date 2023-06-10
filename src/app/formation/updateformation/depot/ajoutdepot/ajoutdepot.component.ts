import { AuthService } from '../../../../services/auth.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { DepotService } from '../../../../services/depot.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutdepot',
  templateUrl: './ajoutdepot.component.html',
  styleUrls: ['./ajoutdepot.component.css']
})
export class AjoutdepotComponent implements OnInit {



  id: any;
  list: any ;
formateur: any;
  listt:any;




  constructor(    private _auth: AuthService, private _depot: DepotService, private router: Router, private _formateur: FormateurService) { }

  ngOnInit(): void {

     let user= this._auth.getUserData();
     this.id = user._id;

    this.getbyidEtudiant();
    this.getformateur();

  }



  getbyidEtudiant(){


    this._depot.getByIdEtudiant(this.id).subscribe(
      res=>{
        this.listt = res;
        console.log(this.listt);

      },

      (err)=>{
        console.log(err);

      }
    )
  }



  getdepot() {
    this._depot.getAll().subscribe(
      response => {

        this.list = response;
      },
      error => {
        console.log(error);

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




  file: any;

  depot = {
    id_Etudiant: '',
    id_Formateur: '',
    descreption: '',



  }




  selectedimage(event: any) {
    this.file = event.target.files[0];

  }



  ajout() {
    let f = new FormData();

    this.depot.id_Etudiant = this.id;
    f.append('id_Etudiant', this.depot.id_Etudiant);
    f.append('id_Formateur', this.depot.id_Formateur);
    f.append('file', this.file);
    f.append('descreption', this.depot.descreption);



    console.log(f);

    this._depot.ajout(f).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre travail a été enregistré',
          showConfirmButton: false,
          timer: 1500
        })


        this.depot = {
          id_Etudiant: '',
          id_Formateur: '',

          descreption: '',

        }

        this.ngOnInit();

      },
      err => {
        console.log(err);

      }
    )



  }
}
