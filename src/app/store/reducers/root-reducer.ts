import {loaderReducer} from './loaderReducer/loader.reducer';
import {weatherReducer} from './weatherReducer/weather.reducer';


export const rootReducer = {
  loader: loaderReducer,
  weather: weatherReducer
};

export type AppState = typeof rootReducer;
