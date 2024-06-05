import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AppConfig } from '../models/helper/appconfig';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  static appSettings: AppConfig;

  constructor(private http: HttpClient) {}

  public loadSettings(): Observable<any> {
    const jsonFile = './assets/appsettings.json';

    return this.http.get(jsonFile).pipe(
      tap(appSettings => {
        AppSettingsService.appSettings = (appSettings as AppConfig);
      })
    );
  }
}
