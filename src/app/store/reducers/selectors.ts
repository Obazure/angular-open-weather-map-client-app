import {createSelector, select} from '@ngrx/store';
import {AppState} from './root-reducer';

const standardStateProjector = state => state;

const loaderState = (state: AppState) => state.loader;
const loaderStateMapper = (state) => state.api;
const weatherState = (state: AppState) => state.weather;

export const selectLoader = createSelector(loaderState, loaderStateMapper);
export const selectWeather = createSelector(weatherState, standardStateProjector);
