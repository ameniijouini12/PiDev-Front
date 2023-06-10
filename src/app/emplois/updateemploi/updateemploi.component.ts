

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateemploi',
  templateUrl: './updateemploi.component.html',
  styleUrls: ['./updateemploi.component.css']
})
export class UpdateemploiComponent implements OnInit {

  id:any;
  response:any;
    constructor(private route:ActivatedRoute,private _emploi:EmploiService,private router:Router,private _formation:FormationService) { }


    ngOnInit(): void {
      this.getallformation();
      this.getemploibyid();


    }
    getallformation(){
    this._formation.getAll().subscribe(
      (res)=>{
        this.formation=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )}
    getemploibyid(){
      this.id=this.route.snapshot.paramMap.get('id');
      this._emploi.getById(this.id).subscribe(
       (res)=>{
        this.response=res,
        this.emploi=this.response
      console.log(res);
      },
        (err)=>{
          console.log(err);

        }
      )
    }
    formation:any;
    emploi={
     title:'',
     description:'',

     dateheure:'',
     enddate:'',

     id_Formation:''
    };

    save(){

      Swal.fire({
        title: 'Souhaitez-vous enregistrer les modifications ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'enregistrer',
        denyButtonText: `Ne pas enregistrer`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isConfirmed) {
      this._emploi.update(this.id,this.emploi).subscribe(
       ( res)=>{
          console.log(res);

          this.router.navigate(['/dashboard/list-emploi'])
        },
        err=>{
          console.log(err);

        }
      )


      Swal.fire('Enregistrée!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire(' Les modifications ne sont pas enregistrées', '', 'info')
      this.router.navigate(['/dashboard/list-emploi'])
    }
  })




}
    }
