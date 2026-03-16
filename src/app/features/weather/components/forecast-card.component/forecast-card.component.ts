import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { weatherResponse } from '../../../../core/models/weatherResponse';
import getWeatherIcon from '../../../../core/config/weather-icons.config';

@Component({
  selector: 'app-forecast-card',
  imports: [],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastCardComponent {
  response = input<weatherResponse | null>(null);
  loading = input<boolean>(false);

  private readonly maxDaysToShow = 7;

  daysWithIcon = computed(() => {
    const res = this.response();
    if (!res) return [];
    return res.days.slice(0, this.maxDaysToShow).map((day) => ({
      ...day,
      iconUrl: getWeatherIcon(day.icon),
    }));
  });
}
