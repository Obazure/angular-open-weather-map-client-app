import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers/root-reducer';
import {WeatherService} from '../../services/weather.service';
import {setLoader} from '../../store/reducers/loaderReducer/loader.actions';
import {setWeather} from '../../store/reducers/weatherReducer/weather.actions';
import {WeatherProfile} from '../../store/reducers/weatherReducer/weather.reducer';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html'
})
export class LoadingScreenComponent implements OnInit {

  errorNavigationPermission = false;

  constructor(
    private store: Store<AppState>,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.setGeoLocation.bind(this),
        this.handleGeoLocationError.bind(this));
    }
  }

  setGeoLocation(geolocation): void {
    this.weatherService.getForecast(geolocation.coords).subscribe((weather: WeatherProfile) => {
      this.store.dispatch(setWeather(weather));
      this.store.dispatch(setLoader({api: false}));
    });
  }

  handleGeoLocationError(error): void {
    if (error.code === error.PERMISSION_DENIED) {
      this.errorNavigationPermission = true;
    }
  }

  consoleAll(some): void {
    console.log(some);
  }

}
