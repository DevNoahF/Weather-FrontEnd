import { Component } from '@angular/core';
import { weatherResponse } from '../../../../core/models/weatherResponse';
import { weatherService } from '../../../../core/services/weatherService';
import { FormsModule } from '@angular/forms';
import { States } from './weather-states.enum';

@Component({
  selector: 'app-weather',
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  InputCity: string = '';
  InputState: string = 'AC';
  InputCountry: string = '';
  inputInitialDate: string = new Date().toISOString().split('T')[0];
  inputFinalDate: string = new Date().toISOString().split('T')[0];
 
  states = Object.keys(States);
  statesEnum: Record<string, string> = States;


  // Union Type( | null=null) -> A variavel pode guardar um objeto do tipo WeatherResponse ou pode estar vazia
  response: weatherResponse | null = null;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private weatherService: weatherService){}

  getWeather(){
    this.loading = true;
    this.errorMessage='';

    const search = {
      city: this.InputCity,
      state: this.InputState as States,
      country: this.InputCountry,
      initDate: this.inputInitialDate,
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
