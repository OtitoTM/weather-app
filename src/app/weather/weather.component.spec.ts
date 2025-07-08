import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class WeatherService {
  private apiKey = 'cef8a23004b67a1be9c7c7c3f26995a1'; // Replace with your OpenWeatherMap API key
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}