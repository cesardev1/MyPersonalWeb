import { Component, OnInit } from '@angular/core';
import build from '@iconify/icons-mdi/office-building'
import email from '@iconify/icons-mdi/email-multiple'
import badge from '@iconify/icons-mdi/badge-account-horizontal'
import birthday from '@iconify/icons-mdi/cake-variant'
import github from '@iconify/icons-mdi/github'
import linkedin from '@iconify/icons-mdi/linkedin-box'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Build=build;
  Email=email;
  Badge=badge;
  Birthday=birthday;
  Github=github;
  Linkedin=linkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
