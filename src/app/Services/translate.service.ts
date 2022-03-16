import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";


@Injectable({providedIn:'root'})

export class TraductorServices{
    public static activeLang='es';

    constructor(public translate: TranslateService)
    {
        this.translate.setDefaultLang('es');
    }

    public cambiarLenguaje(lang:string)
    {
        TraductorServices.activeLang=lang;
        this.translate.use(lang);
    }
}