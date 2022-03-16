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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarjetaProjectoComponent } from './components/tarjeta-projecto/tarjeta-projecto.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BtnTranslateComponent } from './components/btn-translate/btn-translate.component';

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
    BtnTranslateComponent,
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
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(http:HttpClient)=>{
          return new TranslateHttpLoader(http);
        },
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
