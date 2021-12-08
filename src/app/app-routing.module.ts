import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBirthdayComponent } from './add-birthday/add-birthday.component';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { GiftsComponent } from './gifts/gifts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'birthdays', component: BirthdaysComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'add-birthday', component: AddBirthdayComponent },
  { path: 'add-gift', component: AddGiftComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
