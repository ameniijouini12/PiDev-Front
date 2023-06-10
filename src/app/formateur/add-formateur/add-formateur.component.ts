import { FormateurService } from 'src/app/services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
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
  formBuilder: any;

  constructor(private _formateur:FormateurService,private router:Router) { }

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



    });
  }
  image:any;
  formateur={
    name:'',
    lastname:'',
    genre:'',
    age:0,
    specialite:'',

    linkFb:'',
    linkLn:'',

    email:'',
    tel:0,


    password:'',

    role:'',
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

  selectedimage(event:any){
    this.image=event.target.files[0];


  }

  ajout(){
    let f =new FormData();
    f.append('name',this.formateur.name);
    f.append('lastname',this.formateur.lastname);
    f.append('genre',this.formateur.genre);
    f.append('age',this.formateur.age.toString());
    f.append('image',this.image);
    f.append('specialite',this.formateur.specialite);
    f.append('linkFb',this.formateur.linkFb);
    f.append('linkLn',this.formateur.linkLn);
    f.append('email',this.formateur.email);
    f.append('password',this.formateur.password);
    f.append('role','2');
    f.append('tel',this.formateur.tel.toString());
    Swal.fire({
      title: 'voulez-vous enregistrer ce formateur ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'OUI',
      denyButtonText: `NON`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
    this._formateur.ajout(f).subscribe(
      (res)=>{

    console.log(res);
    this.router.navigate(['/dashboard/list-formateur'])
      },
      err=>{
        console.log(err);

      }
    )

    Swal.fire('Enregistrée!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire(' Les modifications ne sont pas enregistrées', '', 'info')

  }

  }

 )

}}
