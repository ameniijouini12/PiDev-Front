import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:any;
  response:any;
    constructor(private route:ActivatedRoute,private _etudiant:EtudiantService,private router:Router) { }


    ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id');
      this._etudiant.getById(this.id).subscribe(
       (res)=>{
        this.response=res,
        this.etudiant=this.response},
        (err)=>{
          console.log(err);

        }
      )

    }
    image:any;
    etudiant={
    name:'',
    lastname:'',
    genre:'',
    age:0,
    specialite:'',

    linkFb:'',
    linkLn:'',
    image:'',
    email:'',
    tel:0,


    password:'',

    role:'',
      }
      selectedimage(event:any){
        this.image=event.target.files[0];

      }

      ajout(){
        let f =new FormData();
        f.append('name',this.etudiant.name);
        f.append('lastname',this.etudiant.lastname);
        f.append('genre',this.etudiant.genre);
        f.append('age',this.etudiant.age.toString());
        if(this.image){
          f.append('image',this.image);}
          else{
            f.append('image',this.etudiant.image);

          }
        f.append('specialite',this.etudiant.specialite);
        f.append('linkFb',this.etudiant.linkFb);
        f.append('linkLn',this.etudiant.linkLn);
        f.append('email',this.etudiant.email);
        f.append('password',this.etudiant.password);
        f.append('role',this.etudiant.role);
        f.append('tel',this.etudiant.tel.toString());

      Swal.fire({
        title: 'Souhaitez-vous enregistrer les modifications ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'enregistrer',
        denyButtonText: `Ne pas enregistrer`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isConfirmed) {
        this._etudiant.update(this.id,f).subscribe(
          (res)=>{
        console.log(res);
        this.router.navigate(['/dashboard/list-us'])
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
