import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoadingScreenComponent} from './screens/loading-screen/loading-screen.component';
import {ScreensComponent} from './screens/screens.component';
import {WeatherInfoScreenComponent} from './screens/weather-info-screen/weather-info-screen.component';
import {rootReducer} from './store/reducers/root-reducer';
import {ConvertTemperatureMetricPipe} from './pipes/convert-temperature-metric.pipe';
import {MapWeatherDescriptionPipe} from './pipes/map-weather-description';
import {WeatherPresentationComponent} from './screens/weather-info-screen/weather-presentation/weather-presentation.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    ScreensComponent,
    WeatherInfoScreenComponent,
    ConvertTemperatureMetricPipe,
    MapWeatherDescriptionPipe,
    WeatherPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer),
    HttpClientModule,
    ChartsModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    ConvertTemperatureMetricPipe,
    MapWeatherDescriptionPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
