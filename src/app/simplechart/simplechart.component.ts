import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {HttpClient} from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-simplechart',
  templateUrl: './simplechart.component.html',
  styleUrls: ['./simplechart.component.css']
})
export class SimplechartComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      type: 'line',
      data: [10, 20, 30, 40, 50]
    }]
  });

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
        let jsdate = new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })

        
      })
  }

}
