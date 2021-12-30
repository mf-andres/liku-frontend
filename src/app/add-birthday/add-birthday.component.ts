import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Birthday } from '../models/birthday';
import { BirthdaysService } from '../services/birthdays.service';
import { DateService } from '../services/date.service';
import { v4 as uuidv4 } from 'uuid';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.css'],
})
export class AddBirthdayComponent implements OnInit {
  userId!: string;
  formGroup!: FormGroup;

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
      console.log('user id' + this.userId);
    });

    this.formGroup = this.formBuilder.group({
      date: '',
      birthdayPerson: '',
    });
  }

  addBirthday(): void {
    const birthday: Birthday = {
      id: uuidv4(),
      userId: this.userId,
      date: this.dateService.formatDate(this.formGroup.get('date')?.value),
      birthdayPerson: this.formGroup.get('birthdayPerson')?.value,
    };
    console.log(this.dateService.formatDate(this.formGroup.get('date')?.value));
    this.birthdaysService.addBirthday(birthday);
    this.router.navigate(['/birthdays'], {
      queryParams: { userId: this.userId },
    });
  }
}

// TODO validate form
