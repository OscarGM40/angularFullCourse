import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [],
})
export class BarrasComponent implements OnInit {
 
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
 
  public barChartLabels: Label[] = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
   ];

   public barChartType: ChartType = 'bar';

   public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#ed5f76',hoverBackgroundColor:"#ad5111",hoverBorderColor:"black",borderWidth:1 },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series D' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public randomize(): void {
    this.barChartData.forEach(barChartData => {
      barChartData.data=[
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ]
    })
  }
}
