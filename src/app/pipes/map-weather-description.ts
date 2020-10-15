import {Pipe, PipeTransform} from '@angular/core';
import {Weather} from '../store/reducers/weatherReducer/weather.reducer';

@Pipe({name: 'mapWeatherDescription'})
export class MapWeatherDescriptionPipe implements PipeTransform {
  transform(toMap: Weather[]): string {
    return toMap.map((weather) => weather.description).join('. ');
  }
}
