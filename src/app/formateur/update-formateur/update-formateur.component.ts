import { FormateurService } from 'src/app/services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  id:any;
  response:any;
    constructor(private route:ActivatedRoute,private _formateur:FormateurService,private router:Router) { }


    ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id');
      this._formateur.getById(this.id).subscribe(
       (res)=>{
         console.log(res);

        this.response=res,
        this.formateur=this.response},
        (err)=>{
          console.log(err);

        }
      )

    }



    image:any;
    formateur={
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

      update(){
      console.log(this.id);

        let f =new FormData();
        f.append('name',this.formateur.name);
        f.append('lastname',this.formateur.lastname);
        f.append('genre',this.formateur.genre);
        f.append('age',this.formateur.age.toString());
        if(this.image){
          f.append('image',this.image);}
          else{
            f.append('image',this.formateur.image);

          }
        f.append('specialite',this.formateur.specialite);
        f.append('linkFb',this.formateur.linkFb);
        f.append('linkLn',this.formateur.linkLn);
        f.append('email',this.formateur.email);
        f.append('password',this.formateur.password);
        f.append('role',this.formateur.role);
        f.append('tel',this.formateur.tel.toString());

        Swal.fire({
          title: 'Souhaitez-vous enregistrer les modifications ?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'enregistrer',
          denyButtonText: `Ne pas enregistrer`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */

          if (result.isConfirmed) {

        this._formateur.update(this.id,f).subscribe(
          (res)=>{
        console.log(res);
        this.router.navigate(['/dashboard/list-formateur'])
          },
          err=>{
            console.log(err);

          }
        )

        Swal.fire('Enregistrée!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire(' Les modifications ne sont pas enregistrées', '', 'info')
         this.router.navigate(['/dashboard/list-formateur'])}
    })}}


