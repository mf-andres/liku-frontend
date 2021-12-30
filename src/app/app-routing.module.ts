import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBirthdayComponent } from './add-birthday/add-birthday.component';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { EditBirthdayComponent } from './edit-birthday/edit-birthday.component';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { GiftsComponent } from './gifts/gifts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'birthdays', component: BirthdaysComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'add-birthday', component: AddBirthdayComponent },
  { path: 'edit-birthday', component: EditBirthdayComponent },
  { path: 'add-gift', component: AddGiftComponent },
  { path: 'edit-gift', component: EditGiftComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
