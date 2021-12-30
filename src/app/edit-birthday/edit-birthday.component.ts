import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Birthday } from '../models/birthday';
import { BirthdaysService } from '../services/birthdays.service';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-edit-birthday',
  templateUrl: './edit-birthday.component.html',
  styleUrls: ['./edit-birthday.component.css'],
})
export class EditBirthdayComponent implements OnInit {
  userId!: string;
  birthdayId!: string;
  date!: string;
  birthdayPerson!: string;

  formGroup!: FormGroup;

  // TODO load the resource to give default values for date and birthday
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private birthdaysService: BirthdaysService,
    private router: Router,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(first()).subscribe((params) => {
      this.userId = params['userId'];
      this.birthdayId = params['birthdayId'];
      this.date = params['date'];
      this.birthdayPerson = params['birthdayPerson'];
    });

    this.formGroup = this.formBuilder.group({
      date: this.date,
      birthdayPerson: this.birthdayPerson,
    });
  }

  editBirthday(): void {
    const birthday: Birthday = {
      id: this.birthdayId,
      userId: this.userId,
      date: this.dateService.formatDate(this.formGroup.get('date')?.value),
      birthdayPerson: this.formGroup.get('birthdayPerson')?.value,
    };
    this.birthdaysService.editBirthday(birthday);
    this.router.navigate(['/birthdays'], {
      queryParams: { userId: this.userId },
    });
  }
}
