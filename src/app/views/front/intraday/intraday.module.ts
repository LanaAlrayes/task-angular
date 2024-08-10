import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntradayRoutingModule } from './intraday-routing.module';
import { IntradayComponent } from './intraday/intraday.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    IntradayComponent
  ],
  imports: [
    CommonModule,
    IntradayRoutingModule,
    HighchartsChartModule
  ]
})
export class IntradayModule { }
