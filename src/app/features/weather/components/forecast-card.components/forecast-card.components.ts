import { Component, input } from '@angular/core';
import { weatherResponse } from '../../../../core/models/weatherResponse';

@Component({
  selector: 'app-forecast-card',
  imports: [],
  templateUrl: './forecast-card.components.html',
  styleUrl: './forecast-card.components.css',
})
export class ForecastCardComponent {
  response = input<weatherResponse | null>(null);
  loading = input<boolean>(false);
}
