import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbCollapseModule,NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {IconModule} from '@visurel/iconify-angular';
import { HomeComponent } from './components/home/home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AboutComponent } from './components/about/about.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { EducationComponent } from './components/education/education.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaProjectoComponent } from './components/tarjeta-projecto/tarjeta-projecto.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CompetencesComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    TarjetaProjectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    IconModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
