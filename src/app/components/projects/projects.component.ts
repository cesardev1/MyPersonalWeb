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
      Name:"Prueba",
      Description:"Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing Incidunt, aspernatur magni. Cum corrupti nisi totam ipsum natus provident, dolorum, inventore fugiat praesentium tempore, aut voluptate placeat libero atque! Reprehenderit, mollitia.",
      tech:"XAMARIN",
      link:"http://www.google.com.mx",
      images:[{directorio:"../../../assets/Images/projectos/ejemplo/Status.jpg", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/ejemplo/Status1.jpg", titulo:"",text:""}]
    },
    {
      Name:"Prueba2",
      Description:"Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing Incidunt, aspernatur magni. Cum corrupti nisi totam ipsum natus provident, dolorum, inventore fugiat praesentium tempore, aut voluptate placeat libero atque! Reprehenderit, mollitia.",
      tech:"XAMARIN",
      link:"http://www.google.com.mx",
      images:[{directorio:"../../../assets/Images/projectos/ejemplo/Status3.jpg", titulo:"",text:""},
              {directorio:"../../../assets/Images/projectos/ejemplo/Status4.jpg", titulo:"",text:""}]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
