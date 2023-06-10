import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateformation',
  templateUrl: './updateformation.component.html',
  styleUrls: ['./updateformation.component.css']
})
export class UpdateformationComponent implements OnInit {

  constructor(private _formation:FormationService,private router:Router,private _formateur:FormateurService,private _etudiant:EtudiantService,private route:ActivatedRoute) { }
  formateur:any;
  etudiant:any;
  id:any;
  response:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {
    this.getformationbyid();
    this.getformateur();
    this.getetudiant();
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


  }
  getformationbyid(){
    this.id=this.route.snapshot.paramMap.get('id');
    this._formation.getById(this.id).subscribe(
     (res)=>{
      this.response=res,
      this.formation=this.response},
      (err)=>{
        console.log(err);

      }
    )
  }
  getformateur(){
    this._formateur.getAll().subscribe(
      (res)=>{
        this.formateur=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }
  getetudiant(){
    this._etudiant.getAll().subscribe(
      (res)=>{
        this.etudiant=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }







  image:any;
  formation={
    title:'',
   description:'',
   date:'',
  nbr_heure:0,
   formateur:'',
  specialite:'',
   groupe:'',
   prix:0,
   technologies:''
  }
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  save(){
    let f =new FormData();
    f.append('title',this.formation.title);
    f.append('description',this.formation.description);
    f.append('date',this.formation.date);
    if(this.image){
      f.append('image',this.image);}
      else{
        f.append('image',this.formateur.image);

      }
    f.append('nbr_heure',this.formation.nbr_heure.toString());
    f.append('formateur',this.formation.formateur);
    f.append('specialite',this.formation.specialite);
    f.append('groupe',JSON.stringify(this.formation.groupe));
    f.append('prix',this.formation.prix.toString());
    f.append('technologies',this.formation.technologies);

    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `Ne pas enregistrer`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {

    this._formation.update(this.id,f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-formation'])
      },
      err=>{
        console.log(err);

      }
    )
    Swal.fire('Enregistrée!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire(' Les modifications ne sont pas enregistrées', '', 'info')
    this.router.navigate(['/dashboard/list-formation'])
   
  }
})}}





