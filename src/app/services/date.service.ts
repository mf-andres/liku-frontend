import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  formatDate(date: Date): string {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return ye + '-' + mo + '-' + da;
  }
}
