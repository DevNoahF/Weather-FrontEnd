import { ChangeDetectorRef, Component } from '@angular/core';
import { weatherResponse } from '../../../../core/models/weatherResponse';
import { weatherService } from '../../../../core/services/weatherService';
import { FormsModule } from '@angular/forms';
import { States } from './weather-states.enum';
import { LoadingCardComponent } from '../loading-card.components/loading-card.components';
import { ErrorCardComponent } from '../error-card.component/error-card.component';
import { ForecastCardComponent } from '../forecast-card.components/forecast-card.components';
import { catchError, finalize, timeout, of, throwError } from 'rxjs';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, LoadingCardComponent, ErrorCardComponent, ForecastCardComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  InputCity: string = '';
  InputState: string = 'AC';
  InputCountry: string = 'BR';
  inputInitialDate: string = new Date().toISOString().split('T')[0];
  inputFinalDate: string = new Date().toISOString().split('T')[0];

  states = Object.keys(States);
  statesEnum: Record<string, string> = States;

  // Union Type( | null=null) -> A variavel pode guardar um objeto do tipo WeatherResponse ou pode estar vazia
  response: weatherResponse | null = null;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private weatherService: weatherService,
    private cdr: ChangeDetectorRef,
  ) {}

  getWeather() {
    this.loading = true;
    this.errorMessage = '';
    this.response = null;

    const search = {
      city: this.InputCity,
      state: this.InputState as States,
      country: this.InputCountry,
      initDate: this.inputInitialDate,
      finalDate: this.inputFinalDate,
    };

    this.weatherService
      .getWeather(search)
      .pipe(
        timeout({ first: 7000, with: () => throwError(() => new Error('timeout')) }),
        catchError((err) => {
          console.error('Erro na requisição:', err);
          this.errorMessage = 'Não foi possivel encontrar o clima para essa região.';
          return of(null);
        }),
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        }),
      )
      .subscribe((res) => {
        if (!res) {
          this.cdr.markForCheck();
          return;
        }
        this.response = res;
        this.errorMessage = '';
        this.cdr.markForCheck();
      });
  }
}
