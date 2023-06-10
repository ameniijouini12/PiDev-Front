import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { EmploiService } from 'src/app/services/emploi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemploi',
  templateUrl: './listemploi.component.html',
  styleUrls: ['./listemploi.component.css']
})
export class ListemploiComponent implements OnInit {

  constructor(private _emploi:EmploiService,private router:Router) { }
  emploi:any;

  ngOnInit(): void {
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
  delete(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
    this._emploi.delete(id).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();

      },
      (err)=>{
        console.log(err);

      }
    )
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})

}
  }



