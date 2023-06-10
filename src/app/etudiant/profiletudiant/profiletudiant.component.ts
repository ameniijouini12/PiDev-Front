import { EndpointService } from './../../services/endpoint.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profiletudiant',
  templateUrl: './profiletudiant.component.html',
  styleUrls: ['./profiletudiant.component.css']
})
export class ProfiletudiantComponent implements OnInit {

  constructor( private _etudiant: EtudiantService , private route: ActivatedRoute ,  public endpoint:EndpointService,private router:Router) { }

response:any
  id: any;
  image:any;
  etudiant:any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._etudiant.getById(this.id).subscribe(
      res=>{
        this.response=res,
        this.etudiant=this.response
      }
    )

  }

    selectedimage(event:any){
      this.image=event.target.files[0];

    }

    update(){
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
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
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

      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
      this.router.navigate(['/dashboard/list-us'])
    }
  })




}
    }



