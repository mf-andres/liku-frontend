import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Gift } from '../models/gift';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css'],
})
export class GiftsComponent implements OnInit {
  userId!: string;
  birthdayId!: string;

  gifts!: Observable<Gift[]>;

  constructor(
    private route: ActivatedRoute,
    private giftsService: GiftsService
  ) {}

  ngOnInit(): void {
    this.gifts = this.route.queryParams.pipe(
      switchMap((params) => {
        this.userId = params['userId'];
        this.birthdayId = params['birthdayId'];
        return this.giftsService.getGifts(this.userId, this.birthdayId);
      })
    );
  }

  removeGift(giftId: string) {
    document.getElementById(giftId)?.remove();
    this.giftsService.removeGift(giftId);
  }
}
