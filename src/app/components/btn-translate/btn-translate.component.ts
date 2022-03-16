import { Component, OnInit } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';
import { TraductorServices } from 'src/app/Services/translate.service';


@Component({
  selector: 'app-btn-translate',
  templateUrl: './btn-translate.component.html',
})
export class BtnTranslateComponent implements OnInit {

  constructor(private translate:TraductorServices) { 
  }

  ngOnInit(): void {
  }

  changeLang(lang:string){
    this.translate.cambiarLenguaje(lang);
  }

}
