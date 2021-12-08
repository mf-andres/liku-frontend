import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.css'],
})
export class AddBirthdayComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddBirthday(): void {
    this.router.navigate(['/birthdays']);
  }
}
