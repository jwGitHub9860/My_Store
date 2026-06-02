import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Item } from "../../models/Item";
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-item',
  imports: [FormsModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.component.css',
})
export class ProductItem implements OnInit {
  // TEMP: use to Display ALL ITEMS BEING PURCHASED?
  allItems: Item[] = [];
  
  // Child Component of "cart" Parent Component
  itemAmountList: number[] = [];

  // Holds All Items being Purchased
  purchaseItemList: Item[] = [];

  // TEMP: Do NOT NEED this "@Output"
  // Sends Data to "cart" Component
  @Output() itemPurchaseAmount: EventEmitter<Item> = new EventEmitter();

  // TEMP: Use to Send "purchaseItemList" to "cart" Parent Component with "product-item" AS Child Component
  // Sends Data to "product-item-detail" Component
  @Output() itemDescription: EventEmitter<Item> = new EventEmitter();

  constructor(private productItemService: ProductItemService, private productListService: ProductListService) {}

  ngOnInit() {
    this.allItems = this.productListService.getItemList();
    this.itemAmountList = this.productItemService.getItemPurchaseAmountList();

    // Pushes Items being Purchased into EMPTY "purchaseItemList" Array
    for (let index = 0; index < this.itemAmountList.length; index++) {
      // TEMP: use "!==" OR "!="?
      if (this.itemAmountList[index] !== 0) {
        this.purchaseItemList.push(this.allItems[index + 1]);
      }
    }
  }

  // TEMP: use to Send "purchaseItemList" to "cart" Webpage
  // TEMP: Rename "submitChosenItem" to "submitPurchaseItemList"
  // TEMP: use for "parent-child" Component Relationship WITH "cart" Component
  // Obtains Chosen Item & Sends it to "cart" & "item-details" Webpages
  submitChosenItem(chosenItem: Item): void {
    // TEMP: Use to Reset "itemAmountList"
    // Ensures "chosenItem" is Empty BEFORE Inputting New Chosen Item
    //this.chosenItem.pop();
    
    // TEMP: Do NOT Need this
    // CANNOT use "=" to Add "chosenItem"
    //this.chosenItem.push(chosenItem);
    
    // TEMP: Rename "itemPurchaseAmount" to "chosenPurchaseItems" LATER
    //this.itemPurchaseAmount.emit(chosenItem);
  }
}
