import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-ajoutevent',
  templateUrl: './ajoutevent.component.html',
  styleUrls: ['./ajoutevent.component.css']
})
export class AjouteventComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    dateDebut: new FormControl(''),
    dateFin: new FormControl(''),
    description: new FormControl(''),
    
    lieu: new FormControl(''),
    capaciteMaximale: new FormControl(''),
    coutParticiaption: new FormControl(''),
    type: new FormControl(''),
   

  });

  submitted = false;



  constructor(private _event:EventService,private router:Router, private formBuilder: FormBuilder) {

   }


  ngOnInit(): void {

    this.form = this.formBuilder.group({

      nom: [null, Validators.required],

      dateDebut: [null, Validators.required],
      dateFin: [null, Validators.required],
      description: [null, Validators.required],
      
      lieu: [null, Validators.required],
      capaciteMaximale: [null, Validators.required],
      coutParticiaption: [null, Validators.required],
      type: [null, Validators.required],
     


    });
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
    this._event.ajout(f).subscribe(
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

