import { Component } from '@angular/core';
import { weatherResponse } from '../../../../core/models/weatherResponse';
import { weatherService } from '../../../../core/services/weatherService';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from '../../../../shared/components/weather-card/weather-card.component';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, WeatherCardComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  InputCity: string = '';
  InputState: string = '';
  InputCountry: string = '';
  inputInitialDate: Date = new Date();
  inputFinalDate: Date = new Date();


  // Union Type -> A variavel pode guardar um objeto do tipo WeatherResponse ou pode estar vazia
  response: weatherResponse | null = null;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private weatherService: weatherService){}

  getWeather(){
    this.loading = true;
    this.errorMessage='';

    const search = {
      city: this.InputCity,
      state: this.InputState,
      country: this.InputCountry,
      initialDate: this.inputInitialDate,
      finalDate: this.inputFinalDate
    };

    this.weatherService.getWeather(search).subscribe({
      next: (res) => {
        this.response = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Não foi possivel encontrar o clima para essa região.";
        this.loading = false;
      }
    });
  }

}
