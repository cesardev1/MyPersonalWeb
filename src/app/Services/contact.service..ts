import { HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs'
import {Contact} from '../Interfaces/contact'
import {environment} from '../../environments/environment.prod'


@Injectable({providedIn:'root'})

export class ContactServices{
    private myAppUrl=environment.apiUrl
    private myApiUrl=environment.urlContact

    constructor(private http:HttpClient){}

    saveContact(contact: Contact):Observable<any>{
        return this.http.post(this.myAppUrl+this.myApiUrl,contact);
    }
}

