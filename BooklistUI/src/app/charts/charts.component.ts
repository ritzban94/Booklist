import { DvserviceService } from './dvservice.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartType } from './chartclass'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [DvserviceService]
})

export class ChartsComponent implements OnInit {

  charttypes: ChartType[];
  typeselected: string;
  linechart:any = []
  @ViewChild('canvas') canvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor(private dvserv: DvserviceService) {}

  ngOnInit() {
    this.charttypes = [{typename:"Line",typevalue:'line'},{typename:"Bar",typevalue:'bar'},
                        {typename:"Doughnut",typevalue:'doughnut'},{typename:"Pie",typevalue:'pie'}];
    this.typeselected = 'line'
  }

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.producechart();
  }

  producechart(){
    if(this.typeselected==='line' || this.typeselected ==='bar')
      this.genlinearchart();
    else
      this.gencircularchart();
  }

  gencircularchart(){
    this.linechart = new Chart(this.context,{
      type: this.typeselected,
      data: {
        labels: ["Added", "Updated", "Deleted"],
        datasets: [
        {
          label: "Total Activity",
          backgroundColor: ['#80ff80','#ffe680','#ff6666'],
          data: [19,21,21]
        }
      ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Application Activity'
        }
      }
    }
    );
  }

  genlinearchart(){
    this.linechart = new Chart(this.context,{
      type : this.typeselected,
      data : {
        labels : ["Added","Updated","Deleted"],
        datasets : [
          {
            data : [5,3,1,10],
            borderColor : '#00b300',
            backgroundColor : '#80ff80',
            fill: false
          },
          {
            data : [4,2,3,12],
            borderColor : '#ffcc00',
            backgroundColor : '#ffe680',
            fill: false
          },
          {
            data : [2,0,4,15],
            borderColor : '#ff0000',
            backgroundColor : '#ff6666',
            fill: false
          }
        ]
      },
      options : {
        legend : {
          display : false
        },
        scales : {
          xAxes : [{
            display : true
          }],
          yAxes : [{
            display : true
          }]
        }
      }
    });
  }

}
