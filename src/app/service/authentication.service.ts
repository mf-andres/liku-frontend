import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = '';

  constructor(private router: Router) {}

  login(user: string): void {
    this.user;
    this.router.navigate(['birthdays'], { queryParams: { userId: user } });
  }
}
