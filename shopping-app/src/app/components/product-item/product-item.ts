import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Item } from "../../models/Item";

@Component({
  selector: 'app-product-item',
  imports: [FormsModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.component.css',
})
export class ProductItem implements OnInit {
  // Child Component of "cart", "product-item-detail", and "product-list" Parent Components

  // Receives Input from Parent Component
  // Initializes "chosenItem" to ONE Empty Item
  @Input() chosenItem: Item = {
    id: 0,
    name: '',
    price: 1,
    url: '',
    description: ''
  };

  // TEMP: use "Item" model or Create new item model (Only has "url", "name", & "price")
  // Sends Data to "cart" Component
  @Output() itemPurchaseAmount: EventEmitter<Item> = new EventEmitter();

  // TEMP: use "Item" model or Create new item model (Only has "url", "name", & "price")
  // Sends Data to "product-item-detail" Component
  @Output() itemDescription: EventEmitter<Item> = new EventEmitter();
  
  allItems: Item[] = [];

  constructor() {}

  ngOnInit() { }

  // TEMP: function is UNFINISHED
  // TEMP: figure out how to Obtain item ID First
  submitChosenItem(): void {
    this.itemPurchaseAmount.emit();
  }
}
