import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {


  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    genre: new FormControl(''),
    age: new FormControl(''),
    image: new FormControl(''),
    specialite: new FormControl(''),
    linkFb: new FormControl(''),
    linkLn: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    tel: new FormControl(''),

  });

  submitted = false;



  constructor(private _etudiant:EtudiantService,private router:Router, private formBuilder: FormBuilder) {

   }


  ngOnInit(): void {

    this.form = this.formBuilder.group({

      name: [null, Validators.required],

      lastname: [null, Validators.required],

      genre: [null, Validators.required],

      age: [null, Validators.required],
      image: [null, Validators.required],
      specialite: [null, Validators.required],
      linkFb: [null, Validators.required],
      linkLn: [null, Validators.required],
      email: ['null', [Validators.required, Validators.email]] ,
      password: [null, Validators.required],
      tel: [null, Validators.required],


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
    this.submitted = false;
    this.form.reset();
  }


  image:any;
  etudiant={
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
console.log(event.target.files[0]);

  }

  ajout(){


    let f =new FormData();
    f.append('name',this.etudiant.name);
    f.append('lastname',this.etudiant.lastname);
    f.append('genre',this.etudiant.genre);
    f.append('age',this.etudiant.age.toString());
    f.append('image',this.image);
    f.append('specialite',this.etudiant.specialite);
    f.append('linkFb',this.etudiant.linkFb);
    f.append('linkLn',this.etudiant.linkLn);
    f.append('email',this.etudiant.email);
    f.append('password',this.etudiant.password);
    f.append('role','3');
    f.append('tel',this.etudiant.tel.toString());
    this._etudiant.ajout(f).subscribe(
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

