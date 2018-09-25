import { Observable, of } from 'rxjs';
import { ICurrentWeather } from '../interfaces';

export interface IWeatherService {
  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather>;
  getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather>;
  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather>;
}

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle'
  };

  public getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }

  public getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }

  public getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
