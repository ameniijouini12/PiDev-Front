import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filterTerm!: string;




  constructor(private _userService: UserService, public endpoint: EndpointService, private router: Router) { }

  users: any;
  filtredUsers: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this._userService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
        this.filtredUsers = res
      }
    )
  }

  delete(id: any) {
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
        this._userService.delete(id).subscribe(
          res => {
            this.getUsers();

          },
          (err) => {
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

  blockUnblock(id: string) {
    this._userService.blockUnblock(id).subscribe(
      res => {
        this.getUsers();
      });
  }

  onSelectRoleChange(event: any) {
    if (event.target.value == 'ALL') {
      this.filtredUsers = this.users;
    } else {
      this.filtredUsers = this.users.filter((user: any) => user.userType == event.target.value)
    }
  }

  onSelectLockedChange(event: any) {
    switch (event.target.value) {
      case 'LOCKED':
        this.filtredUsers = this.users.filter((user: any) => !user.isActive);
        break;
      case 'UNLOCKED':
        this.filtredUsers = this.users.filter((user: any) => user.isActive);
        break;
      case 'ALL':
        this.filtredUsers = this.users
        break;
    
      default:
        break;
    }
  }
}



