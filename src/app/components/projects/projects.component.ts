import { Component, OnInit } from '@angular/core';
import { Projecto } from 'src/app/Interfaces/proyecto';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  ListaProjectos:Projecto[]=[
    {
      Name:"Quiron",
      Description:"Aplicacion para localizacion y contacto con medicos especialistas atravez del uso de mapas",
      tech:"XAMARIN",
      link:"",
      images:[{directorio:"../../../assets/Images/projectos/quironapp/quiron (1).jpg", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/quironapp/quiron (2).jpg", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/quironapp/quiron (3).jpg", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/quironapp/quiron (4).jpg", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/quironapp/quiron (5).jpg", titulo:"",text:""},
             ]
    },
    {
      Name:"CesarDev",
      Description:"Pagina de perfil personal para uso como curriculm y portafolio asi como integracion de un blog personal",
      tech:"Angular",
      link:"https://github.com/cesardev1/MyPersonalWeb.git",
      images:[{directorio:"../../../assets/Images/projectos/personalWeb/Screenshot_1.png", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/personalWeb/Screenshot_2.png", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/personalWeb/Screenshot_3.png", titulo:"",text:""},
            ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
