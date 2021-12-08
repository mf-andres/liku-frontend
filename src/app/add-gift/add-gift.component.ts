import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css'],
})
export class AddGiftComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddGift(): void {
    this.router.navigate(['gifts']);
  }
}
