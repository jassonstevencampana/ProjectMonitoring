import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { LanguageDataTables } from 'src/helpers/language.datatables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  dtOptions: DataTables.Settings = {
    language: LanguageDataTables.italian_datatables,
    lengthMenu: [5],
    dom: "Bfrtip"
  };


  ngOnInit(): void {
  }

  //STATO PROGETTI (%)
  public doughnutChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr: any[] = ctx.chart.data.datasets[0].data; 45

          dataArr.map((data: number) => {
            sum += data;
          });
          let percentage = (value * 100 / sum).toFixed(2) + "%";
          return percentage;
        },
        backgroundColor: "white"
      },
    }
  };
  public doughnutChartData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Completati', 'In corso', 'In ritardo', 'In attesa', 'In pipe'],
    datasets: [{
      data: [2, 7, 2, 1, 15], backgroundColor: ["#49D3A1", "#5EC7D6", "#EB6E62", "#F7CE64", "#718FE5"]
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartPlugins = [DatalabelsPlugin];



  //STATO AVANZAMENTO PROGETTI
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        backgroundColor: "gainsboro"
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DatalabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['PRJ 1', 'PRJ 2', 'PRJ 3', 'PRJ 4', 'PRJ 5', 'PRJ 6'],
    datasets: [
      { data: [15, 15, 7, 20, 22, 13, 10], label: 'GG schedulate', backgroundColor: "#718FE5" },
      { data: [2, 3, 1, 23, 30, 10, 4], label: 'GG consumate', backgroundColor: "#FD9742" }
    ]
  };


}
