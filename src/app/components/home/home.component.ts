import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {TraductorServices} from '../../Services/translate.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  background='../../../assets/Images/circuito_wall.jpg'
  constructor(private translate:TranslateService) {
    this.translate.setDefaultLang(TraductorServices.activeLang)
   }
  

  ngOnInit(): void {
  }

}
