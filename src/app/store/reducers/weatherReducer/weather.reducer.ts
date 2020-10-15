export interface WeatherProfile {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: DailyWeather[];
}

export interface DailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: WeatherTemperature;
  feels_like: WeatherFeeling;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

export interface WeatherTemperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherFeeling {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

import {createReducer, on} from '@ngrx/store';
import {setWeather, SetWeatherAction} from './weather.actions';

const initialState: WeatherProfile = {daily: [], lat: 0, lon: 0, timezone: '', timezone_offset: 0};

export type WeatherState = typeof initialState;

export const weather = createReducer(
  initialState,
  on(setWeather, (state: WeatherState | undefined, action) => ({
    ...state,
    ...action
  }))
);

export const weatherReducer = (state: WeatherState | undefined, action: SetWeatherAction) => {
  return weather(state, action);
};

