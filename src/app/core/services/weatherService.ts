import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
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
    private readonly API_URL = 'http://localhost:8080/' ;

    constructor(private http: HttpClient) {}

    getWeather(request: weatherRequest): Observable<weatherResponse> {
        const params = new HttpParams()
            .set('city', request.city)
            .set('state', request.state)
            .set('country', request.country)
            .set('initialDate', request.initialDate.toString())
            .set('finalDate',request.finalDate.toString());
        return this.http.get<weatherResponse>(`${this.API_URL}`, { params });
    }
}