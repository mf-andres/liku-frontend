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

  showGifted = false;

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

  onSlideToggle(): void {
    this.showGifted = !this.showGifted;
    if (!this.showGifted) {
      this.gifts = this.giftsService.getGifts(this.userId, this.birthdayId);
    } else {
      this.gifts = this.giftsService.getGiftedGifts(
        this.userId,
        this.birthdayId
      );
    }
  }

  onMarkAsGifted(giftId: string) {
    console.log('show gifted ' + this.showGifted);
    document.getElementById(giftId)?.remove();
    if (!this.showGifted) {
      this.giftsService.markAsGifted(giftId);
    } else {
      this.giftsService.unMarkAsGifted(giftId);
    }
  }
}
