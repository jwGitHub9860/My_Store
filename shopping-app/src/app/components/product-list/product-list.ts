// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, inject, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  // Receives Item List from "Observable"
  items$!: Observable<Item[]>;

  // TEMP: Change into "Observable"?
  // TEMP: use "!" to Define or Not?
  // TEMP: Define in "constructor" or Not?
  itemAmountList: number[];

  // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);

    this.itemAmountList = [ 1, 1, 1, 1, 1, 1 ];
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

  addItemsToCart(id: number): void { this.productItemService.setItemPurchaseAmount(this.itemAmountList[id - 1], id); }
}
