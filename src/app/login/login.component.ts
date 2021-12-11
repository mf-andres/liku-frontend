import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      user: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    if (this.formGroup.valid) {
      const user = this.formGroup.controls['user'].value;
      this.authenticationService.login(user);
    }
  }
}
