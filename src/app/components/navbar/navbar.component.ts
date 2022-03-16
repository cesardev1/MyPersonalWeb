import { Component, OnInit } from '@angular/core';
import user from '@iconify/icons-mdi/account-circle-outline';
import briefcase from '@iconify/icons-mdi/briefcase-account-outline';
import file from '@iconify/icons-mdi/file-account-outline'
import book from '@iconify/icons-mdi/book-account-outline'
import newspaper from '@iconify/icons-mdi/newspaper'
import envelope from '@iconify/icons-mdi/email-variant'
import home from '@iconify/icons-mdi/memory'
import { TranslateService } from '@ngx-translate/core';
import { TraductorServices } from 'src/app/Services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Home=home;
  User=user;
  Briefcase=briefcase;
  File=file;
  Book=book;
  Newspaper=newspaper;
  Envelope=envelope;

  constructor(private translate:TranslateService) {
    this.translate.setDefaultLang(TraductorServices.activeLang);
   }
   
  public isMenuCollapsed=true;
  ngOnInit(): void {
  }

  toggleState(){
    let foo=this.isMenuCollapsed;
    this.isMenuCollapsed=foo===false?true:false;
  }

}
