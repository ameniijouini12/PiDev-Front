import { Component, OnInit } from '@angular/core';
import {EndpointService} from "../../../../../../Nouveau dossier/PiDev-Front/src/app/services/endpoint.service";
import {Router} from "@angular/router";
import {EventService} from "../../services/event.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  filterTerm!: string;

  constructor( public endpoint:EndpointService , private router:Router , private  _formation : EventService) { }
  Event:any;
  ngOnInit(): void {
    this._formation.getAll().subscribe(
      (res)=>{
        this.Event=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  };


  delete(idFormation:any){

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
        this._formation.delete(idFormation).subscribe(
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

