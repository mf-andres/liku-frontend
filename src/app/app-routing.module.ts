import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'birthdays', component: BirthdaysComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
