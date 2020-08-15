import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) {}
    
  dailyForecast() {
      return this._http.get("https://run.mocky.io/v3/17ea7979-4d8a-4852-b669-2175945040a0")
      .pipe(map(result => result));
    }
  
}
