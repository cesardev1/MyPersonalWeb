import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ContactServices } from 'src/app/Services/contact.service.';
import { Contact } from '../../Interfaces/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [NgbModal, NgbModalConfig],
  animations: [
    trigger('changeButton', [
      state('inactive', style({ width: '180px' })),
      state('active', style({ width: '68px' })),
      transition('inactive => active', [
        animate('0.5s ease-in'),
      ]),
      transition('active => inactive', [
        animate('0.5s'),
      ])
    ]),
    trigger('rotateArrow', [
      state('inactive', style({ transform: 'rotate(0deg)' })),
      state('active', style({ transform: 'rotate(-90deg)' })),
    ]),
    trigger('loading', [
      state('active', style({ opacity: 1 })),
      state('inactive', style({ opacity: 0 })),
      transition('inactive => active', [
        animate('0.5s ease-in'),
      ]),
    ])
  ]

})

export class ContactComponent implements OnInit {

  agregarContacto: FormGroup;
  id = 0
  btnState = 'inactive';
  MessageModal = '';
  private contacto: Contact | undefined; 

  constructor(private fb: FormBuilder,
    private _contactoServices: ContactServices,
    private router: Router,
    aRouter: ActivatedRoute,
    config: NgbModalConfig,
    private modalService: NgbModal) {

      


    // Configuración de modal
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;


    // Declaración del form builder para ayudarnos en la validacion de los campos
    this.agregarContacto = fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      subject: [null, Validators.required],
      comment: [null, Validators.required]
    });


  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.agregarContacto = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.required)
    });

    this.agregarContacto.valueChanges.subscribe(value => { console.log(value); });
  }

  agregar(content: any) {

    this.btnState = 'active';

    this.contacto = this.getDataForm();
    
    this._contactoServices.saveContact(this.contacto!).subscribe((data) => {
      this.agregarContacto.reset();
      this.btnState = 'inactive';
      this.MessageModal = 'Mensaje enviado con éxito en breve nos contactaremos con usted';
      this.modalService.open(content);
    }, (error) => {
      this.btnState = 'inactive';
      this.MessageModal = 'Error al enviar el mensaje';
      this.modalService.open(content);
    })
  }


  getDataForm():Contact{

    let contacto:Contact= {
      Name: this.agregarContacto.get('name')?.value,
      Email: this.agregarContacto.get('email')?.value,
      Telephone: '',
      Rol: 'client',
      Section: 'contact',
      Subject: this.agregarContacto.get('subject')?.value,
      Message: this.agregarContacto.get('comment')?.value,
      To: 'my',
      Date_creation: new Date()
    };

    return contacto;
  }

}
