import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-ajoutreclamation',
  templateUrl: './ajoutreclamation.component.html',
  styleUrls: ['./ajoutreclamation.component.css']
})
export class AjoutreclamationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    statut: new FormControl(''),
    date: new FormControl(''),
   
  

  });
  public statuts: string[] = ['EN_ATTENTE', 'EN_COURS', 'RESOLUE'];


  submitted = false;



  constructor(private _etudiant:ReclamationService,private router:Router, private formBuilder: FormBuilder) {

   }


  ngOnInit(): void {

    this.form = this.formBuilder.group({

      statut: [null, Validators.required],

      date: [null, Validators.required],

      

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
  reclamation={
  statut:'',



  date:'',

    }
 

  ajout(){


    let f =new FormData();
    f.append('statut',this.reclamation.statut);
    f.append('date',this.reclamation.date);


    this._etudiant.ajout(f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/reclamation'])
      },
      err=>{
        console.log(err);

      }
    )

  }

 }

