import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../services/endpoint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailsadmin',
  templateUrl: './detailsadmin.component.html',
  styleUrls: ['./detailsadmin.component.css']
})
export class DetailsadminComponent implements OnInit {

  constructor( private router: Router,private _admin: AdminService , private route: ActivatedRoute ,  public endpoint:EndpointService) { }


  id: any;

  response:any

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._admin.getById(this.id).subscribe(
      (res)=>{
        this.response=res,
        this.admin=this.response},
        (err)=>{
          console.log(err);

        }

    )}
  selectedimage(event:any){
    this.image=event.target.files[0];

  }
  image:any;
  admin={
    name:'',
    lastname:'',

    image:'',
    email:'',

    password:'',
      }

  update(){
    console.log(this.admin)
    let f =new FormData();
    f.append('name',this.admin.name);
    f.append('lastname',this.admin.lastname);

    if(this.image){
      f.append('image',this.image);}
      else{
        f.append('image',this.admin.image);

      }


    f.append('email',this.admin.email);
    f.append('password',this.admin.password);



    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `Ne pas enregistrer`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */


      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        console.log(f)
    this._admin.update(this.id,f).subscribe(
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
    this.router.navigate(['/dashboard/list-us'])
  }
})




}

}
