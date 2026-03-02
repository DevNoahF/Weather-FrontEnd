import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { weatherResponse } from '../models/weatherResponse';
import { weatherRequest } from '../models/weatherRequest';

@Injectable({
    // Padrão singleton -> faz com que Service seja uma instancia unica.
    // proovidedIn -> Injeção de dependencia
    providedIn: 'root' 
})
export class weatherService{
    // mudar url
    private readonly API_URL = 'http://localhost:8080/weather' ;

    constructor(private http: HttpClient) {}

    getWeather(request: weatherRequest): Observable<weatherResponse> {
        const initDate = new Date(request.initDate);
        const finalDate = new Date(request.finalDate);
        
        const body = {
            city: request.city,
            state: request.state,
            country: request.country,
            initDate: initDate.toISOString().split('T')[0],
            finalDate: finalDate.toISOString().split('T')[0]
        };
        return this.http.post<weatherResponse>(`${this.API_URL}`, body);
    }
}