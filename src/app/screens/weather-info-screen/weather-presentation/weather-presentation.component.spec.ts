import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPresentationComponent } from './weather-presentation.component';

describe('WeatherPresentationComponent', () => {
  let component: WeatherPresentationComponent;
  let fixture: ComponentFixture<WeatherPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
