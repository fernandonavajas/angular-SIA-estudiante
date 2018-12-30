import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-estudiante',
  templateUrl: './grafico-estudiante.component.html',
  styleUrls: ['./grafico-estudiante.component.css']
})
export class GraficoEstudianteComponent implements OnInit {

  constructor() { }
  // lineChart
  public lineChartData:Array<any> = [
    {data: [4.7, 5.5, 4.3, 4.1, 4.5, 4.5], label: 'Mis notas'},
    {data: [4.8, 4.8, 4.0, 3.9, 5.0, 4.7], label: 'Promedio'},
  ];
  public lineChartLabels:Array<any> = ['2013', '2014', '2015', '2016', '2017', '2018'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(119, 155, 233, 0.3)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(233, 119, 119, 0.3)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
 
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 7) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
  }

}
