import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Birthday } from '../models/birthday';
import { BirthdaysService } from '../services/birthdays.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css'],
})
export class BirthdaysComponent implements OnInit {
  userId!: string;
  birthdays!: Observable<Birthday[]>;

  constructor(
    private route: ActivatedRoute,
    private birthdaysService: BirthdaysService
  ) {}

  ngOnInit(): void {
    this.birthdays = this.route.queryParams.pipe(
      switchMap((params) => {
        const userId = params['userId'];
        return this.birthdaysService.getBirthdays(userId);
      })
    );
  }
}
