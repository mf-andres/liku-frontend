import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Gift } from '../models/gift';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-edit-gift',
  templateUrl: './edit-gift.component.html',
  styleUrls: ['./edit-gift.component.css'],
})
export class EditGiftComponent implements OnInit {
  userId!: string;
  birthdayId!: string;
  giftId!: string;
  formGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private giftsService: GiftsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(first()).subscribe((params) => {
      this.userId = params['userId'];
      this.birthdayId = params['birthdayId'];
      this.giftId = params['giftId'];
    });

    this.formGroup = this.formBuilder.group({
      description: '',
    });
  }

  onEditGift(): void {
    const gift: Gift = {
      id: this.giftId,
      userId: this.userId,
      birthdayId: this.birthdayId,
      gifted: false,
      description: this.formGroup.get('description')?.value,
    };
    this.giftsService.editGift(gift);
    this.router.navigate(['gifts'], {
      queryParams: { userId: this.userId, birthdayId: this.birthdayId },
    });
  }
}
