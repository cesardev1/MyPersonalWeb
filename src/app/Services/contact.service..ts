import { HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs'
import {Contact} from '../Interfaces/contact'


@Injectable({providedIn:'root'})

export class ContactServices{
    private myAppUrl='http://localhost:3000'
    private myApiUrl='/api/contact'

    constructor(private http:HttpClient){}

    saveContact(contact: Contact):Observable<any>{
        return this.http.post(this.myAppUrl+this.myApiUrl,contact);
    }
}

