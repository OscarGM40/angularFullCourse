import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others','...REST'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,75,25,15],
    [50, 150, 120, 125, 34],
    [250, 130, 70, 44, 61],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]=[
    {
      backgroundColor:[
        "#0075ED",
        "#00BAf7",
        "#00E0DB",
        "#00F7AD",
        "#00ED63",
      ]
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
