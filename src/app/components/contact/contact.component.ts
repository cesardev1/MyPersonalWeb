import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactServices } from 'src/app/Services/contact.service.';
import {Contact} from '../../Interfaces/contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  agregarContacto: FormGroup;
  id=0
  contact:Contact|undefined;

  constructor(private fb:FormBuilder,
    private _contactoServices:ContactServices,
    private router:Router,
    aRouter:ActivatedRoute) {
      this.agregarContacto=fb.group({
        name:['',Validators.required],
        email:['',Validators.required],
        subject:['',Validators.required],
        comment:['',Validators.required]
      });
     }

  ngOnInit(): void {
  }
  agregar(){
    console.log(this.agregarContacto);
    const contacto: Contact={
      name:this.agregarContacto.get('name')?.value,
      email:this.agregarContacto.get('email')?.value,
      telephone:'',
      rol:'client',
      section:'contact',
      subject:this.agregarContacto.get('subject')?.value,
      text:this.agregarContacto.get('comment')?.value,
      to:'my',
      date_creation:new Date()
    }

    this._contactoServices.saveContact(contacto).subscribe((data)=>{
      console.log('envio exitoso')
      alert("Mensaje enviado con exito!!!");
      this.agregarContacto.reset();
      this.agregarContacto.reset();
      this.agregarContacto.reset();
      this.agregarContacto.reset();
    },(error)=>{
      console.log(error);
      alert("")
    })
  }

}
