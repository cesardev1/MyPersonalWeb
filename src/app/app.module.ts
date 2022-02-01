import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {IconModule} from '@visurel/iconify-angular';
import { HomeComponent } from './components/home/home.component'
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    IconModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
