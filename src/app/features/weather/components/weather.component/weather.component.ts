import { ChangeDetectorRef, Component } from '@angular/core';
import { weatherResponse } from '../../../../core/models/weatherResponse';
import { weatherService } from '../../../../core/services/weatherService';
import { FormatService } from '../../../../core/services/formatService';
import { FormsModule } from '@angular/forms';
import { States } from './weather-states.enum';
import { LoadingCardComponent } from '../loading-card.component/loading-card.component';
import { ErrorCardComponent } from '../error-card.component/error-card.component';
import { ForecastCardComponent } from '../forecast-card.component/forecast-card.component';
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

  minDate: string;
  maxDate: string;

  constructor(
    private weatherService: weatherService,
    private cdr: ChangeDetectorRef,
    private formatService: FormatService,
  ) {
    this.minDate = this.formatService.getMinDate();
    this.maxDate = this.formatService.getMaxDate();
  }

  onCityInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = this.formatService.removeAccents(input.value);
    this.InputCity = input.value;
  }

  validateDates(): boolean {
    if (!this.inputInitialDate || !this.inputFinalDate) {
      this.errorMessage = 'Por favor, preencha as datas de início e fim.';
      return false;
    }

    if (!this.formatService.isDateInRange(this.inputInitialDate)) {
      this.errorMessage = `A data inicial deve estar entre ${this.minDate} e ${this.maxDate}.`;
      return false;
    }

    if (!this.formatService.isDateInRange(this.inputFinalDate)) {
      this.errorMessage = `A data final deve estar entre ${this.minDate} e ${this.maxDate}.`;
      return false;
    }

    if (!this.formatService.isValidDateRange(this.inputInitialDate, this.inputFinalDate)) {
      this.errorMessage = 'A data inicial não pode ser maior que a data final.';
      return false;
    }

    return true;
  }

  getWeather() {
    if (!this.validateDates()) {
      return;
    }

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
        timeout({ first: 10000, with: () => throwError(() => new Error('timeout')) }),
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
