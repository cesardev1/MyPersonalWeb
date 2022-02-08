import { Component, Input, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'
import {Projecto} from '../../Interfaces/proyecto'


@Component({
  selector: 'app-tarjeta-projecto',
  templateUrl: './tarjeta-projecto.component.html',
  styleUrls: ['./tarjeta-projecto.component.css'],
})
export class TarjetaProjectoComponent implements OnInit {
  @Input() projectoEntrante:any;
  
  constructor() {

   }


  ngOnInit(): void {
  }

}
