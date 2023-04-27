import {Component, Input, OnInit} from '@angular/core';
import { GaugeChartModule } from 'angular-gauge-chart'

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {
  constructor(public chart: GaugeChartModule) {}

  public canvasWidth = 300

  @Input() public value!: number
  public needleValue = this.value

  @Input() public centralLabel!: string
  @Input() name: string | undefined
  public options = {
    hasNeedle: false,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(51,51,51)', 'lightgray'],
    arcDelimiters: [this.value],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  }

  // public canvasWidth = 300
  // public needleValue = 65
  // public centralLabel = '65%'
  // public name = 'Gauge chart'
  // public options = {
  //   hasNeedle: false,
  //   needleColor: 'gray',
  //   needleUpdateSpeed: 1000,
  //   arcColors: ['rgb(51,51,51)', 'lightgray'],
  //   arcDelimiters: [65],
  //   rangeLabel: ['0', '100'],
  //   needleStartValue: 50,
  // }

  ngOnInit(): void {
  }

}
