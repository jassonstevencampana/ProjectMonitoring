import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {

    new Chart("myAreaChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



    new Chart("statoProgetti", {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Completati', 'In corso', 'In ritardo', 'In attesa', 'In pipe'],
        datasets: [{
          label: 'Nr. progetti',
          data: [2, 7, 2, 1, 15],
          backgroundColor: [
            'rgba(28, 200, 138, 0.4)',
            'rgba(78, 115, 223, 0.4)',
            'rgba(231, 74, 59, 0.4)',
            'rgba(246, 194, 62, 0.4)',
            'rgba(54, 185, 204, 0.4)'
          ],
          borderColor: [
            'rgba(28, 200, 138, 1)',
            'rgba(78, 115, 223, 1)',
            'rgba(231, 74, 59, 1)',
            'rgba(246, 194, 62, 1)',
            'rgba(54, 185, 204, 1)'
          ],
          hoverOffset: 4,
        }],
      },
      options: {
        plugins: {
          legend: {
            position: "right",
          }
        },


        maintainAspectRatio: false
      }
    });
  }
}
