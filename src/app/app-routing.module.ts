import { PdfComponent } from './pdf/pdf.component';
import { NformateurComponent } from './home/nformateur/nformateur.component';
import { NformationComponent } from './home/nformation/nformation.component';
import { ContactComponent } from './home/contact/contact.component';


import { AgendformateurComponent } from './agendformateur/agendformateur.component';
import { AuthformaGuard } from './authforma.guard';
import { AuthetudGuard } from './authetud.guard';
import { ListdepotComponent } from './formation/updateformation/depot/listdepot/listdepot.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AjoutdepotComponent } from './formation/updateformation/depot/ajoutdepot/ajoutdepot.component';
import { DashboardformateurComponent } from './dashboardformateur/dashboardformateur.component';
import { QuestionComponent } from './question/question.component';
import { AjoutfeedbackComponent } from './feedback/ajoutfeedback/ajoutfeedback.component';
import { ListfeedbackComponent } from './feedback/listfeedback/listfeedback.component';
import { DashboardetudiantComponent } from './dashboardetudiant/dashboardetudiant.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

import { DetailsformationComponent } from './formation/detailsformation/detailsformation.component';
import { UpdateformationComponent } from './formation/updateformation/updateformation.component';
import { AjoutformationComponent } from './formation/ajoutformation/ajoutformation.component';
import { ListformationComponent } from './formation/listformation/listformation.component';
import { AjoutemploiComponent } from './emplois/ajoutemploi/ajoutemploi.component';
import { ListemploiComponent } from './emplois/listemploi/listemploi.component';
import { DetailsFormateurComponent } from './formateur/details-formateur/details-formateur.component';
import { UpdateFormateurComponent } from './formateur/update-formateur/update-formateur.component';
import { AddFormateurComponent } from './formateur/add-formateur/add-formateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';


import { ListComponent } from './etudiant/list/list.component';
import { ProfiletudiantComponent } from './etudiant/profiletudiant/profiletudiant.component';
import { UpdateComponent } from './etudiant/update/update.component';
import { ListFormateurComponent } from './formateur/list-formateur/list-formateur.component';
import { UpdateemploiComponent } from './emplois/updateemploi/updateemploi.component';
import { ChartComponent } from './chart/chart.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormationformateurComponent } from './formationformateur/formationformateur.component';
import { DetailsadminComponent } from './detailsadmin/detailsadmin.component';
import { QuestionadminComponent } from './questionadmin/questionadmin.component';
import { AddFormationComponent } from './formation/add-formation/add-formation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AjoutreclamationComponent } from './reclamation/ajoutreclamation/ajoutreclamation.component';
import {AddEventComponent} from "./event/add-event/add-event.component";
import {ListEventComponent} from "./event/list-event/list-event.component";


const routes: Routes = [




  {path:'nformateur',component:NformateurComponent},
  {path:'nformation',component:NformationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboardetudiant' ,component: DashboardetudiantComponent , children:[

    {path: '', redirectTo:'agenda', pathMatch: 'full'},


    { path: 'ajoutfeedback', component:AjoutfeedbackComponent },
    { path: 'question', component:QuestionComponent },
    { path: 'ajoutdepot', component:AjoutdepotComponent },
    { path: 'agenda', component:AgendaComponent },
    { path: 'profiletudiant/:id' , component: ProfiletudiantComponent },


  ]
  },
  { path: 'dashboardformateur',component: DashboardformateurComponent , children:[

    {path: '', redirectTo:'Agendaform', pathMatch: 'full'},
    {path:'formationf',component:FormationformateurComponent},
    { path: 'question', component:QuestionComponent },
    { path: 'Agendaform', component:AgendformateurComponent },
    { path: 'listdepot', component:ListdepotComponent },
    { path: 'ajoutedepot', component:AjoutdepotComponent },
    { path: 'listedepot', component:ListdepotComponent },
    { path: 'profileformateur/:id' , component: DetailsFormateurComponent },

  ]
  },

  { path:'dashboard' ,component: DashboardComponent , children:[

    { path: 'question1', component:QuestionadminComponent},
    {path: '', redirectTo:'/dashboard/list-us', pathMatch: 'full'},
    { path: 'chart', component:ChartComponent},

    { path: 'profiletudiant/:id' , component: ProfiletudiantComponent },
    { path: 'detail', component: DetailsadminComponent },
    { path: 'list-us', component: ListComponent },
    { path: 'ajoutetudiant' , component: AddEtudiantComponent },
    { path: 'updateetudiant/:id' , component: UpdateComponent },
    { path: 'list-formateur', component: ListFormateurComponent},
    { path: 'ajoutformateur' , component: AddFormateurComponent },
      { path: 'ajoutevent' , component: AddEventComponent },
      { path: 'list-Event', component: ListEventComponent},
      { path: 'updateformateur/:id' , component: UpdateFormateurComponent },
    { path: 'profileformateur/:id' , component: DetailsFormateurComponent },
    { path: 'list-emploi', component: ListemploiComponent},
    { path: 'ajoutemploi' , component: AjoutemploiComponent },
    { path: 'updateemploi/:id' , component: UpdateemploiComponent },
    { path: 'list-formation', component: ListformationComponent},
    { path: 'ajoutformation' , component: AddFormationComponent },
    { path: 'updateformation/:id' , component: UpdateformationComponent },
    { path: 'profileformation/:id' , component: DetailsformationComponent },
    { path: 'list-feedback' , component:ListfeedbackComponent },
    { path: 'reclamation' , component:ReclamationComponent },
    { path: 'ajoutreclamation' , component:AjoutreclamationComponent },



  ]


 },



];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
