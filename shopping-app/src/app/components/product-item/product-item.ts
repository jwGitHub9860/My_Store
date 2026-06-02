import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Item } from "../../models/Item";
import { ProductList } from "../../components/product-list/product-list";

@Component({
  selector: 'app-product-item',
  imports: [FormsModule, ProductList],
  templateUrl: './product-item.html',
  styleUrl: './product-item.component.css',
})
export class ProductItem implements OnInit {
  // TEMP: use to Display ALL ITEMS BEING PURCHASED?

  // TEMP: Change into "purchaseItemList" to Hold All Items being Purchased
  // TEMP: Keep Array Here or Elsewhere?
  // Parent Component of "product-list", "cart", and "product-item-detail" Child Components
  chosenItem: Item[] = [];

  // TEMP: Do NOT NEED this "@Output"
  // Sends Data to "cart" Component
  @Output() itemPurchaseAmount: EventEmitter<Item> = new EventEmitter();

  // TEMP: Use to Send "purchaseItemList" to "cart" Parent Component with "product-item" AS Child Component
  // Sends Data to "product-item-detail" Component
  @Output() itemDescription: EventEmitter<Item> = new EventEmitter();
  
  allItems: Item[] = [];

  constructor() {}

  ngOnInit() { }

  // TEMP: use for "parent-child" Component Relationship WITH "cart" Component
  // Obtains Chosen Item & Sends it to "cart" & "item-details" Webpages
  submitChosenItem(chosenItem: Item): void {
    // Ensures "chosenItem" is Empty BEFORE Inputting New Chosen Item
    this.chosenItem.pop();
    
    // CANNOT use "=" to Add "chosenItem"
    this.chosenItem.push(chosenItem);
    
    // TEMP: Rename "itemPurchaseAmount" to "chosenItemDetails" LATER
    //this.itemPurchaseAmount.emit(chosenItem);
  }
  
  // TEMP: Reset "itemAmountList" HERE?
  // TEMP: use "<button>" Tag to Reset Item Purchase Amounts?
  // TEMP: use "Submit" Feature?
}
