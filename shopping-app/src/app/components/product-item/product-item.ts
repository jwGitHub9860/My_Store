import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  allItems: Item[] = [];
  
  // Child Component of "cart" Parent Component
  itemAmountList: number[] = [];

  // Holds All Items being Purchased
  purchaseItemList: Item[] = [];

  // Sends "purchaseItemList" to "cart" Parent Component with "product-item" AS Child Component
  @Output() chosenPurchaseItems: EventEmitter<Item[]> = new EventEmitter();

  constructor(private productItemService: ProductItemService, private productListService: ProductListService) {}

  ngOnInit() {
    //this.allItems = this.productListService.getItemList();

    // Returns "Observable" (stream of data)
    // Does NOT Return raw data anymore
    this.productListService.getItemList().subscribe(res => {
      this.allItems = res;
    });
    
    this.itemAmountList = this.productItemService.getItemPurchaseAmountList();

    // Pushes Items being Purchased into EMPTY "purchaseItemList" Array
    for (let index = 0; index < this.itemAmountList.length; index++) {
      // TEMP: use "!==" OR "!="?
      if (this.itemAmountList[index] !== 0) {
        this.purchaseItemList.push(this.allItems[index + 1]);
      }
    }
  }

  // Obtains List of Chosen Purchase Items & Sends it to "cart" Webpage
  submitPurchaseItemList(): void {
    this.chosenPurchaseItems.emit(this.purchaseItemList);
    
    // Resets "purchaseItemList" Back to Empty Array
    this.purchaseItemList.pop();
  }
}
