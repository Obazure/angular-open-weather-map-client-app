import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers/root-reducer';
import {selectWeather} from '../../store/reducers/selectors';
import {WeatherProfile} from '../../store/reducers/weatherReducer/weather.reducer';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import * as moment from 'moment';
import {TEMP_METRIC_CELSIUS, TEMP_METRIC_FAHRENHEIT} from '../../store/reducers/weatherReducer/weather.actions';
import {ConvertTemperatureMetricPipe} from '../../pipes/convert-temperature-metric.pipe';

@Component({
  selector: 'app-weather-info-screen',
  templateUrl: './weather-info-screen.component.html'
})
export class WeatherInfoScreenComponent implements OnInit {
  _TEMP_METRIC_CELSIUS = TEMP_METRIC_CELSIUS;
  _TEMP_METRIC_FAHRENHEIT = TEMP_METRIC_FAHRENHEIT;
  currentMetric = TEMP_METRIC_CELSIUS;

  weather$ = this.store.pipe(select(selectWeather));
  weather: WeatherProfile;
  today = Date.now();

  currentPage: number;
  pageSize = 3;

  chartOptions = {responsive: true, legend: {position: 'bottom'}};

  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [];

  constructor(
    private store: Store<AppState>,
    private convertMetric: ConvertTemperatureMetricPipe
  ) {
  }

  ngOnInit(): void {
    this.weather$.subscribe((weather: WeatherProfile) => {
      this.weather = weather;
      this.currentPage = 0;

      this.initBarChart();
    });
  }

  initBarChart(): void {
    const labels = [];
    const dayTemp = [];
    const minTemp = [];
    const maxTemp = [];

    this.weather.daily.forEach(day => {
      labels.push(moment(day.dt * 1000).format('YYYY-MM-DD'));
      dayTemp.push(this.convertMetric.transform(+day.temp.day, this.currentMetric));
      minTemp.push(this.convertMetric.transform(+day.temp.min, this.currentMetric));
      maxTemp.push(this.convertMetric.transform(+day.temp.max, this.currentMetric));
    });
    this.barChartLabels = labels;
    const metric = this.currentMetric;
    this.barChartData = [
      {data: dayTemp, label: `Day ${metric}`},
      {data: minTemp, label: `Min ${metric}`},
      {data: maxTemp, label: `Max ${metric}`}
    ];
  }

  isNextPageExist(): boolean {
    return this.weather.daily.length > (this.currentPage + this.pageSize);
  }

  isPreviousPageExist(): boolean {
    return 0 < this.currentPage;
  }

  nextForecast(): void {
    this.currentPage += this.pageSize;
  }

  previousForecast(): void {
    this.currentPage -= this.pageSize;
  }

}
