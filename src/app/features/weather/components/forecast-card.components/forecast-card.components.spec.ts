import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponents } from './forecast-card.components';

describe('WeatherCardComponents', () => {
  let component: WeatherCardComponents;
  let fixture: ComponentFixture<WeatherCardComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCardComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
