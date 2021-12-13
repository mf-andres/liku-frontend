import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Gift } from '../models/gift';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css'],
})
export class AddGiftComponent implements OnInit {
  userId!: string;
  birthdayId!: string;
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
    });

    this.formGroup = this.formBuilder.group({
      description: '',
    });
  }

  onAddGift(): void {
    const gift: Gift = {
      id: uuidv4(),
      userId: this.userId,
      birthdayId: this.birthdayId,
      gifted: false,
      description: this.formGroup.get('description')?.value,
    };
    this.giftsService.addGift(gift);
    this.router.navigate(['gifts']);
  }
}
