import {Component, Input, OnInit} from '@angular/core';
import {DailyWeather} from '../../../store/reducers/weatherReducer/weather.reducer';

@Component({
  selector: 'app-weather-presentation',
  templateUrl: './weather-presentation.component.html',
})
export class WeatherPresentationComponent implements OnInit {
  @Input() weather: DailyWeather;
  @Input() metric: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
