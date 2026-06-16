// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, inject, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  // Receives Item List from "Observable"
  items$!: Observable<Item[]>;

  itemAmountList: number[] = [ 0, 0, 0, 0, 0, 0 ];

  // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);
  }
  
  ngOnInit() {
    // Uses "AsyncPipe" to Refresh User Interface
    // "AsyncPipe" -> Receives New Value from "Observable"
    // Do NOT NEED "subscribe" Call
    this.items$ = this.productListService.getItemList();
  }

  // Submits Chosen Item to "product-item" Component
  submitChosenItem(id: number): void {
    // Stores Chosen Item ID in "product-item" Service File
    this.productItemService.setChosenItemId(id);

    // Navigates to Item Details Webpage
    // Ensures "item-details" Webpage Opens WHEN Item Image is Clicked On
    // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
    this.router.navigate(['item-details'], {relativeTo: this.route});
  }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  increaseAmount(id: number): void { this.itemAmountList[id - 1] += 1; }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  decreaseAmount(id: number): void {
    // CANNOT be NEGATIVE Item Amount
    if (this.itemAmountList[id - 1] > 0) {
      this.itemAmountList[id - 1] -= 1;
    }
  }

  recordItemPurchaseAmount(id: number): void { this.productItemService.setItemPurchaseAmount(this.itemAmountList[id - 1], id); }
}
