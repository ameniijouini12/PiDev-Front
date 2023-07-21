import { User } from './../../Models/User';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {


  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userType: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    numero: new FormControl(''),

  });

  submitted = false;

  image:any;
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

    this._userService.ajout(this.user).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-us'])
      },
      err=>{
        console.log(err);

      }
    )

  }

 }

