import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.component.html',
  styleUrls: ['./home-profesor.component.css']
})
export class HomeProfesorComponent implements OnInit {

  name:string = "Julio Profe";
  constructor() { }

  ngOnInit() {
  }

}
