import {Pipe, PipeTransform} from '@angular/core';
import {TEMP_METRIC_CELSIUS} from '../store/reducers/weatherReducer/weather.actions';

@Pipe({name: 'convertMetric'})
export class ConvertTemperatureMetricPipe implements PipeTransform {
  transform(value: number, metric?: string, comparingTo = TEMP_METRIC_CELSIUS): number {
    return (metric === comparingTo)
      ? +(value - 273.15).toFixed(2)
      : +(((value - 273.15) * 1.8) + 32).toFixed(2);
  }
}
