import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpService } from 'src/app/views/services/http.service';

@Component({
  selector: 'app-intraday',
  templateUrl: './intraday.component.html',
  styleUrls: ['./intraday.component.css']
})
export class IntradayComponent {
  Highcharts: typeof Highcharts = Highcharts;  // This ensures that Highcharts is typed correctly
  chartOptions!: Highcharts.Options;

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.service.getIntradayData().subscribe((data: any) => {
      const timeSeries = data['Time Series (5min)'];
      const categories: string[] = [];
      const openData: number[] = [];
      const highData: number[] = [];
      const lowData: number[] = [];

      for (let time in timeSeries) {
        categories.push(time);
        openData.push(parseFloat(timeSeries[time]['1. open']));
        highData.push(parseFloat(timeSeries[time]['2. high']));
        lowData.push(parseFloat(timeSeries[time]['3. low']));
      }

      this.chartOptions = {
        chart: {
          zoomType: 'x',
        },
        title: {
          text: 'IBM Stock Price (Intraday)',
        },
        xAxis: {
          categories: categories.reverse(),
        },
        yAxis: [
          {
            title: {
              text: 'Open',
            },
            opposite: true,
          },
          {
            title: {
              text: 'High',
            },
          },
          {
            title: {
              text: 'Low',
            },
            opposite: true,
          },
        ],
        series: [
          {
            name: 'Open',
            data: openData.reverse(),
            yAxis: 0,
            type: 'line',
            color: '#7cb5ec',
          },
          {
            name: 'High',
            data: highData.reverse(),
            yAxis: 1,
            type: 'line',
            color: '#90ed7d',
          },
          {
            name: 'Low',
            data: lowData.reverse(),
            yAxis: 2,
            type: 'line',
            color: '#f7a35c',
          },
        ],
      };
    });
  }
}
