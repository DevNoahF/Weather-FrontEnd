import { Component, Input } from '@angular/core';
import { weatherDaysListResponse } from '../../../core/models/weatherDaysListResponse';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input({ required: true }) day!: weatherDaysListResponse;
  @Input() isMain: boolean = false;
}
