import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers/root-reducer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) {
  }

  getForecast({latitude, longitude}): Observable<any> {
    return this.http.get(`${environment.apiUrl}?lat=${latitude}&lon=${longitude}`);
  }
}
