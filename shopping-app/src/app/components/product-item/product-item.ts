// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';

// TEMP: Remove this Import Statement LATER
import { FormsModule } from "@angular/forms";

// TEMP: do I Still Need these Import Statements?
import { Observable } from "rxjs";
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
  // TEMP: do I Stil Need this?
  // Receives Item List from "Observable"
  allItems$!: Observable<Item[]>;

  // TEMP: do I Still Need this?  
  // Child Component of "cart" Parent Component
  itemAmountList: number[] = [];

  // TEMP: do I Still Need this?
  // Holds All Items being Purchased
  purchaseItemList: Item[] = [];

  // TEMP: Remove this LATER
  // Sends "purchaseItemList" to "cart" Parent Component with "product-item" AS Child Component
  @Output() chosenPurchaseItems: EventEmitter<Item[]> = new EventEmitter();

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);
  }

  // TEMP: REMOVE EVERYTHING in "ngOnInit()" & Leave EMPTY LATER
  ngOnInit() {
    this.allItems$ = this.productListService.getItemList();
    this.itemAmountList = this.productItemService.getItemPurchaseAmountList();

    // Pushes Items being Purchased into EMPTY "purchaseItemList" Array
    for (let index = 0; index < this.itemAmountList.length; index++) {
      if (this.itemAmountList[index] !== 0) {
        // CANNOT USE "index" Because "allItems" Uses "any" Type ("!")
        this.allItems$.subscribe(items => {
          const currentItem = items.find(item => item.id === (index + 1));
          if (currentItem) {
            this.purchaseItemList.push(currentItem);
          }
        })
      }
    }
  }

  // TEMP: Remove this LATER
  // Obtains List of Chosen Purchase Items & Sends it to "cart" Webpage
  submitPurchaseItemList(): void {
    this.chosenPurchaseItems.emit(this.purchaseItemList);
    
    // Resets "purchaseItemList" Back to Empty Array
    this.purchaseItemList.pop();
  }
}
