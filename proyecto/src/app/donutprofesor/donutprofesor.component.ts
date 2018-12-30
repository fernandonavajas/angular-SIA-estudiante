import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donutprofesor',
  templateUrl: './donutprofesor.component.html',
  styleUrls: ['./donutprofesor.component.css']
})
export class DonutprofesorComponent implements OnInit {
  // Pie
  public pieChartLabels:string[] = ['Reprobados','Aprobados'];
  public pieChartData:number[] = [2, 12];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public numeroRandom(){
    this.pieChartData =[
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
    ];
  }
  constructor() { }

  ngOnInit() {
  }

}
