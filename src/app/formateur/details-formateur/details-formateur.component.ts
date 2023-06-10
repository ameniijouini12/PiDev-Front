import { FormateurService } from 'src/app/services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-formateur',
  templateUrl: './details-formateur.component.html',
  styleUrls: ['./details-formateur.component.css']
})
export class DetailsFormateurComponent implements OnInit {

  constructor( private router: Router,private _formateur: FormateurService , private route: ActivatedRoute ,  public endpoint:EndpointService) { }


  formateur: any;
  id: any;
  image:any

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._formateur.getById(this.id).subscribe(
      res=>{
        this.formateur = res;
      }
    )

  }
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  update(){
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
      title: 'voulez-vous enregistrer les modifications ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'OUI',
      denyButtonText: `NON`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
    this._formateur.update(this.id,f).subscribe(
      (res)=>{
    console.log(res);

      },
      err=>{
        console.log(err);

      }
    )


    Swal.fire('Enregistrée!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire(' Les modifications ne sont pas enregistrées', '', 'info')

  }
})




}
  }

