import { Router } from '@angular/router';
import { User } from './../Models/User';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userType: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    numero: new FormControl(''),

  });

  submitted = false;

  user: User = new User();

  constructor(private _userService:UserService,private router:Router, private formBuilder: FormBuilder) {

  }


 ngOnInit(): void {

   this.form = this.formBuilder.group({

     firstName: [null, Validators.required],

     lastName: [null, Validators.required],

     userType: [null, Validators.required],

     email: ['null', [Validators.required, Validators.email]] ,
     password: [null, Validators.required],
     numero: [null, Validators.required],


   });
 }
 get f(): { [key: string]: AbstractControl } {
   return this.form.controls;
 }
 onSubmit(): void {
   this.submitted = true;
   if (this.form.invalid) {
     return;
   }
   console.log(JSON.stringify(this.form.value, null, 2));
 }
 onReset(): void {
   console.log('form', this.form)
   // this.submitted = false;
   // this.form.reset();
 }


 

 ajout(){

   this._userService.register(this.user).subscribe(
     (res)=>{
   console.log(res);
   this.router.navigate(['/login'])
     },
     err=>{
       console.log(err);

     }
   )

 }

}

