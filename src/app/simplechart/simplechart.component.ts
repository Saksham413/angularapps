import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import { Options } from "highcharts/highstock";
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-simplechart',
  templateUrl: './simplechart.component.html',
  styleUrls: ['./simplechart.component.css']
})
export class SimplechartComponent implements OnInit {

  datastring = ""
	data=[10];
	isLoaded=false

  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Options = {
    rangeSelector: {
		buttons: [{
			type: 'day',
			count: 3,
			text: '3d'
		}, {
			type: 'week',
			count: 1,
			text: '1w'
		}, {
			type: 'month',
			count: 1,
			text: '1m'
		}, {
			type: 'month',
			count: 6,
			text: '6m'
		}, {
			type: 'year',
			count: 1,
			text: '1y'
		}, {
			type: 'all',
			text: 'All'
		}],
		selected: 3
	},

	yAxis: {
		title: {
			text: 'Temperature (°C)'
		}
	},

	title: {
		text: 'Hourly temperatures in Vik i Sogn, Norway, 2009-2017'
	},

	subtitle: {
		text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
	},

	series: [{
        type: 'line',
        //pointInterval: 24 * 3600 * 1000,
        //data: [1, 2, 3, 4, 5]
		name: 'Temperature',
		data: this.data,
		pointStart: 1230764400000,
		pointInterval: 3600000,
		tooltip: {
			valueDecimals: 1,
			valueSuffix: '°C'
		}
    }]
  };

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
		  console.log(res['data'])
		//console.log(res['data'][1])
		//this.datastring=JSON.stringify(res['data']);
		//console.log(this.datastring)
		// let i;
		// for(i=0;i<78906;i++){
		// 	this.data.push(this.datastring[i]);
		// // 	console.log(res[i])
		// }
		let i;
		for(i=0; i<78906; i++){
			this.data.push(res['data'][i])
			//console.log(res['data'][i])
		}
		this.isLoaded=true;
	  })
  }

}
