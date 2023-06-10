import { NformationComponent } from './home/nformation/nformation.component';
import { ListdepotComponent } from './formation/updateformation/depot/listdepot/listdepot.component';


import { ChartComponent } from './chart/chart.component';
import { DashboardetudiantComponent } from './dashboardetudiant/dashboardetudiant.component';
import { Footer2Component } from './dashboardformateur/footer2/footer2.component';
import { Footer1Component } from './dashboardetudiant/footer1/footer1.component';
import { Sidebar2Component } from './dashboardformateur/sidebar2/sidebar2.component';
import { Header2Component } from './dashboardformateur/header2/header2.component';
import { Sidebar1Component } from './dashboardetudiant/sidebar1/sidebar1.component';
import { DashboardformateurComponent } from './dashboardformateur/dashboardformateur.component';
import { AjoutfeedbackComponent } from './feedback/ajoutfeedback/ajoutfeedback.component';
import { QuestionComponent } from './question/question.component';
import { AjoutdepotComponent } from './formation/updateformation/depot/ajoutdepot/ajoutdepot.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidbarComponent } from './dashboard/sidbar/sidbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListComponent } from './etudiant/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormateurComponent } from './formateur/formateur.component';
import { ListFormateurComponent } from './formateur/list-formateur/list-formateur.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './etudiant/update/update.component';
import { ProfiletudiantComponent } from './etudiant/profiletudiant/profiletudiant.component';
import { AddFormateurComponent } from './formateur/add-formateur/add-formateur.component';
import { UpdateFormateurComponent } from './formateur/update-formateur/update-formateur.component';
import { DetailsFormateurComponent } from './formateur/details-formateur/details-formateur.component';
import { ListemploiComponent } from './emplois/listemploi/listemploi.component';
import { AjoutemploiComponent } from './emplois/ajoutemploi/ajoutemploi.component';
import { UpdateemploiComponent } from './emplois/updateemploi/updateemploi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DetailsformationComponent } from './formation/detailsformation/detailsformation.component';
import { AjoutformationComponent } from './formation/ajoutformation/ajoutformation.component';
import { UpdateformationComponent } from './formation/updateformation/updateformation.component';
import { ListformationComponent } from './formation/listformation/listformation.component';
import { LoginComponent } from './login/login.component';
import { Header1Component } from './dashboardetudiant/header1/header1.component';

import { ChartsModule } from 'ng2-charts';

import { CommonModule, DatePipe } from '@angular/common';
import { ListfeedbackComponent } from './feedback/listfeedback/listfeedback.component';
import { AgendformateurComponent } from './agendformateur/agendformateur.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HomeComponent } from './home/home.component';
import { FooterhComponent } from './home/footerh/footerh.component';
import { HeadhComponent } from './home/headh/headh.component';
import { CoverComponent } from './home/cover/cover.component';
import { StatComponent } from './home/stat/stat.component';
import { TeamComponent } from './home/team/team.component';
import { BlogComponent } from './home/blog/blog.component';
import { ContactComponent } from './home/contact/contact.component';
import { NformateurComponent } from './home/nformateur/nformateur.component';
import { PdfComponent } from './pdf/pdf.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormationformateurComponent } from './formationformateur/formationformateur.component';
import { DetailsadminComponent } from './detailsadmin/detailsadmin.component';
import { QuestionadminComponent } from './questionadmin/questionadmin.component';


FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);




@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    FooterComponent,
    EtudiantComponent,
    ListComponent,
    FormateurComponent,
    ListFormateurComponent,
    AddEtudiantComponent,
    UpdateComponent,
    ProfiletudiantComponent,
    AddFormateurComponent,
    UpdateFormateurComponent,
    DetailsFormateurComponent,
    ListemploiComponent,
    AjoutemploiComponent,
    UpdateemploiComponent,
    ListfeedbackComponent,

    DetailsformationComponent,

    UpdateformationComponent,
    ListformationComponent,
   LoginComponent,
   UpdateformationComponent,
   AjoutformationComponent,
   AjoutdepotComponent,
   QuestionComponent,
   UpdateFormateurComponent,
   AjoutformationComponent,
   AjoutfeedbackComponent,
   DashboardformateurComponent,
   FooterComponent,
   Sidebar1Component,
   SidbarComponent,
   HeaderComponent,
   Header1Component,
   Header2Component,
   Sidebar2Component,
   Footer1Component,
   Footer2Component,
   DashboardetudiantComponent,
   ChartComponent,
   AgendformateurComponent,
   AgendaComponent,
   ListdepotComponent,



   ListformationComponent,
   HomeComponent,
   FooterhComponent,
   HeadhComponent,
   CoverComponent,
   StatComponent,
   TeamComponent,
   BlogComponent,
   ContactComponent,
   NformationComponent,
   NformateurComponent,
   PdfComponent,
   FormationformateurComponent,
   DetailsadminComponent,
   QuestionadminComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    FullCalendarModule,

    ReactiveFormsModule,

    ChartsModule,
    Ng2SearchPipeModule

  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
