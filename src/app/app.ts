import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './features/weather/components/weather.component/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
