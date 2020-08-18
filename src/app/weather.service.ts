import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("https://run.mocky.io/v3/12fdaa63-dcb4-43d7-8520-37886b2cc6a4")
      .pipe(map(result => result));
  }


}
