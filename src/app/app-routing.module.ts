import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { GiftsComponent } from './gifts/gifts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'birthdays', component: BirthdaysComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
