import { Component, OnInit } from '@angular/core';
import {EndpointService} from "../../services/endpoint.service";
import {Router} from "@angular/router";
import {EventService} from "../../services/Event.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {


  constructor( public endpoint:EndpointService , private router:Router , private  _Event : EventService) { }
  Event:any;
  ngOnInit(): void {
    this._Event.getAll().subscribe(
      (res)=>{
        this.Event=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  };


  delete(idEvent:any){

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
        this._Event.delete(idEvent).subscribe(
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

