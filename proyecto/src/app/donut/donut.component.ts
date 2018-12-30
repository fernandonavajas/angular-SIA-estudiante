import { Component } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  // Pie
  public pieChartLabels:string[] = ['Reprobados','Aprobados', 'Faltantes'];
  public pieChartData:number[] = [2, 12, 63];
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
      Math.round(Math.random()*100),
    ];
  }
}
