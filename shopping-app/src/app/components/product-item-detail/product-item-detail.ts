// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, inject, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Item } from "../../models/Item";
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-item-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item-detail.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetail implements OnInit {
  chosenItemId: number = 0;
  itemAmount: number;

  // Receives Item List from "Observable"
  allItems$!: Observable<Item[]>;

  // ONLY WAY to Move to "product-list" Webpage WITHOUT RESETTING Purchase Item Amounts
  private router = inject(Router);

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);

    this.itemAmount = 0;
  }

  ngOnInit(): void {
    this.allItems$ = this.productListService.getItemList();
    
    // Obtains Chosen Item ID
    this.chosenItemId = this.productItemService.getChosenItemId();
  }

  addItemsToCart(id: number, price: number): void {
    this.productItemService.setItemPurchaseAmount(this.itemAmount, id, price);
    
    // Obtains item Price for Calculating Total Purchase Cost
    this.productItemService.setTotalPurchaseCost(this.itemAmount, price);
  }

  navigateToProductList() { this.router.navigate(['/']); }
}
