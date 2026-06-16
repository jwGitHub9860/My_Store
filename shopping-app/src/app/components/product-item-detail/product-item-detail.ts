// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Observable } from 'rxjs';
import { Item } from "../../models/Item";
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-item-detail',
  imports: [CommonModule],
  templateUrl: './product-item-detail.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetail implements OnInit {
  chosenItemId: number = 0;
  itemAmount: number = 0;

  // Receives Item List from "Observable"
  allItems$!: Observable<Item[]>;

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);
  }

  ngOnInit(): void {
    this.allItems$ = this.productListService.getItemList();
    
    // Obtains Chosen Item ID
    this.chosenItemId = this.productItemService.getChosenItemId();
  }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  increaseAmount(): void { this.itemAmount += 1; }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  decreaseAmount(): void {
    // CANNOT be NEGATIVE Item Amount
    if (this.itemAmount > 0) {
      this.itemAmount -= 1;
    }
  }

  recordItemPurchaseAmount(id: number): void { this.productItemService.setItemPurchaseAmount(this.itemAmount, id); }
}
