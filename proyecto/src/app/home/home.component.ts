import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = 'Juanin Bodoque'
  age: number=25;

  constructor() { }

  ngOnInit() {
  }

}
