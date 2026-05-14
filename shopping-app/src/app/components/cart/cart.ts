import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.component.css',
})
export class Cart implements OnInit {
  full_name: string = '';
  address: string = '';
  credit_card_number: string = '';

  constructor() {}

  ngOnInit(): void {
    //
  }
}
