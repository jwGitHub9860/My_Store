import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
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
