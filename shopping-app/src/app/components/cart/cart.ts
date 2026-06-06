import { Component, OnInit } from '@angular/core';
import { Billing_Info } from "../../models/Billing-Info";
import { BillingInformation } from "../../components/billing-information/billing-information";
import { Item } from '../../models/Item';
import { ProductItem } from "../../components/product-item/product-item";

@Component({
  selector: 'app-cart',
  imports: [BillingInformation, ProductItem],
  templateUrl: './cart.html',
  styleUrl: './cart.component.css',
})
export class Cart implements OnInit {
  // Parent Component of "billing-information" & "product-item" Components
  purchaseList: Item[] = [];
  full_name: string = '';
  thankYouMessage: string = "Thank you, " + this.full_name + " !";

  constructor() {}

  ngOnInit(): void { }

  // Function for Parent-Child Relationship between "cart" & "billing-information" Components
  obtainBillingInfo(customerInfo: Billing_Info): void {
    this.full_name = customerInfo.full_name;
    this.thankYouMessage = "Thank you, " + this.full_name + " !";

    // Resets "full_name" Back to Empty String
    this.full_name = '';
  }

  // Function for Parent-Child Relationship between "cart" & "product-item" Components
  obtainPurchaseList(purchaseItems: Item[]): void {
    // Must Add purchase items INDIVIDUALLY
    // CANNOT use "=" to Add "purchaseItems"
    for (let index = 0; index < purchaseItems.length; index++) {
      const currentChosenItem = purchaseItems[index];
      this.purchaseList.push(currentChosenItem);
    }
  }
}
