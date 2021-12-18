import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gift } from '../models/gift';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  constructor(private http: HttpClient) {}

  getGifts(userId: string, birthdayId: string): Observable<Gift[]> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const params = new HttpParams()
      .append('userId', userId)
      .append('birthdayId', birthdayId);
    const response$ = this.http.get<Gift[]>(environment.giftsURL, {
      headers,
      params,
    });
    return response$;
  }
  // TODO add http interceptor
  addGift(gift: Gift): void {
    this.http.post(environment.giftURL, gift).pipe(first()).subscribe();
  }

  removeGift(giftId: string): void {
    this.http
      .delete(`${environment.giftURL}/${giftId}`)
      .pipe(first())
      .subscribe();
  }
}
