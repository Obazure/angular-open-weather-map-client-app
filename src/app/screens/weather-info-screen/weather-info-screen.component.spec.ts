import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoScreenComponent } from './weather-info-screen.component';

describe('WeatherInfoScreenComponent', () => {
  let component: WeatherInfoScreenComponent;
  let fixture: ComponentFixture<WeatherInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
