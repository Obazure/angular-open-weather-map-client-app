import {createAction, props} from '@ngrx/store';
import {WeatherProfile} from './weather.reducer';

export const TEMP_METRIC_CELSIUS = '°C';
export const TEMP_METRIC_FAHRENHEIT = '°F';

export const SET_WEATHER = 'WEATHER/SET_WEATHER';

export interface SetWeatherAction {
  type: typeof SET_WEATHER;
}

export const setWeather = createAction(SET_WEATHER, props<WeatherProfile>());
