import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherResponse } from '../models/weatherResponse';
import { weatherRequest } from '../models/weatherRequest';
import { environment } from '../../../environments/environment.development';

@Injectable({
  // Padrão singleton -> faz com que Service seja uma instancia unica.
  // proovidedIn -> Injeção de dependencia
  providedIn: 'root',
})
export class weatherService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeather(request: weatherRequest): Observable<weatherResponse> {
    const initDate = new Date(request.initDate);
    const finalDate = new Date(request.finalDate);

    const body = {
      city: request.city,
      state: request.state,
      country: request.country,
      initDate: initDate.toISOString().split('T')[0],
      finalDate: finalDate.toISOString().split('T')[0],
    };
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    });
    // Add a cache-busting query param to ensure the backend is hit every time
    const ts = Date.now();
    return this.http.post<weatherResponse>(this.url, body, { headers });
  }
}
