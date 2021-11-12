import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100,75,25],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#0075ED', '#00BAf7', '#00E0DB', '#00F7AD', '#00ED63'],
    },
  ];
  constructor(private gs: GraficasService) {}

  ngOnInit(): void {
    /*     this.gs.getUsuariosPorRedSocial()
      .subscribe(data => {
        this.doughnutChartLabels = Object.keys(data);
        this.doughnutChartData = [...Object.values(data)];
      }) */
    this.gs.getUsuariosConDataCorrecta().subscribe(({ labels, values }) => {
      (this.doughnutChartLabels = labels),
        (this.doughnutChartData = [...values]);
    });
  }
}
