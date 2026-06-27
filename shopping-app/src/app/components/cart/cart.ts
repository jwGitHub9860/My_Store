import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { Billing_Info } from "../../models/Billing-Info";
import { BillingInformation } from "../../components/billing-information/billing-information";
import { Item } from '../../models/Item';
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

// TEMP: Remove Parent-Child Relationship between "cart" & "billing-information" Components?
// TEMP: ^to Make code Simpler?
import { ProductItem } from "../../components/product-item/product-item";

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, BillingInformation, ProductItem],
  templateUrl: './cart.html',
  styleUrl: './cart.component.css',
})
export class Cart implements OnInit {
  // Receives Item List from "Observable"
  allItems$!: Observable<Item[]>;
    
  // Holds Amount of EACH Item being Purchased
  itemAmountList: number[] = [];

  // Holds IDs of All Items being Purchased
  purchaseItemIDsList: number[] = [];

  // Holds All Items being Purchased
  purchaseItemList: Item[] = [];

  // Obtains Total Purchase Cost
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

    // Resets "full_name" Back to Empty String
    this.full_name = '';
  }

  // Obtains New Amount(s) of Each Item being Purchased
  obtainNewPurchaseAmountList(newAmount: number, id: number, price: number): void {
    // Sets NEW AMOUNT of Purchase Item
    this.productItemService.setItemPurchaseAmount(newAmount, id, price);

    // Obtains NEW item Price for Calculating NEW Total Purchase Cost
    this.productItemService.setTotalPurchaseCost(newAmount, price);

    // Obtains NEW Total Purchase Cost
    this.totalPurchaseCost = this.productItemService.getTotalPurchaseCost();
  }
}
