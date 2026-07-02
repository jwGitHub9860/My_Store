import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { Billing_Info } from "../../models/Billing-Info";
import { BillingInformation } from "../../components/billing-information/billing-information";
import { Item } from '../../models/Item';
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, BillingInformation],
  templateUrl: './cart.html',
  styleUrl: './cart.component.css',
})
export class Cart implements OnInit {
  // Receives Item List from "Observable"
  allItems$!: Observable<Item[]>;
  
  itemAmountList: number[] = [];
  purchaseItemIDsList: number[] = [];
  purchaseItemList: Item[] = [];
  totalPurchaseCost: number;

  // Parent Component of "billing-information" Component
  full_name: string = '';
  thankYouMessage: string = "Thank you, " + this.full_name + " !";

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);

    this.totalPurchaseCost = 0;
  }

  ngOnInit(): void {
    this.allItems$ = this.productListService.getItemList();
    this.itemAmountList = this.productItemService.getItemPurchaseAmountList();
    this.totalPurchaseCost = this.productItemService.getTotalPurchaseCost();

    // Obtains Index Array Values of NON-ZERO "itemAmountList" Array Elements
    for (let index = 0; index < this.itemAmountList.length; index++) {
      if (this.itemAmountList[index] !== 0) {
        this.purchaseItemIDsList.push(index);
      }
    }
  }

  // Function for Parent-Child Relationship between "cart" & "billing-information" Components
  obtainBillingInfo(customerInfo: Billing_Info): void {
    this.full_name = customerInfo.full_name;
    this.thankYouMessage = "Thank you, " + this.full_name + " !";
    this.full_name = '';
  }

  // Obtains New Amount(s) of Each Item being Purchased
  obtainNewPurchaseAmountList(newAmount: number, id: number, price: number): void {
    this.productItemService.setItemPurchaseAmount(newAmount, id, price);
    this.productItemService.setTotalPurchaseCost(newAmount, price);
    this.totalPurchaseCost = this.productItemService.getTotalPurchaseCost();
  }

  removeItem(newAmount: number, removeItemId: number, removePurchaseItemId: number, price: number): void {
    this.purchaseItemIDsList.splice(removePurchaseItemId, 1);
    this.productItemService.removePurchaseItem(newAmount, removeItemId, price);
    this.itemAmountList = this.productItemService.getItemPurchaseAmountList();
    this.totalPurchaseCost = this.productItemService.getTotalPurchaseCost();
  }
}
