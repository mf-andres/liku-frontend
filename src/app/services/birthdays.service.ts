import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Birthday } from '../models/birthday';

@Injectable({
  providedIn: 'root',
})
export class BirthdaysService {
  constructor(private http: HttpClient) {}

  getBirthdays(userId: string): Observable<Birthday[]> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const params = new HttpParams().append('userID', userId);
    const response$ = this.http.get<Birthday[]>(environment.birthdaysURL, {
      headers,
      params,
    });
    return response$;
  }
  // TODO add http interceptor
}
