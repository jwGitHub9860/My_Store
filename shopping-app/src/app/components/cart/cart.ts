import { Component, OnInit, EventEmitter } from '@angular/core';
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
  chosenItem: Item[] = [];

  full_name: string = '';
  thankYouMessage: string = "Thank you, " + this.full_name + " !";

  constructor() {}

  ngOnInit(): void { }

  // TEMP: Change into "findAllPurchaseItems()" Function
  // TEMP: Use as Function to Make Parent-Child Relationship with "cart" & "product-item" Components?
  // TEMP: Send "purchaseItemList" Array IF Making Parent-Child Relationship
  // Obtains Customer Name to Use in "confirmation" Webpage
  obtainBillingInfo(customerInfo: Billing_Info): void {
    this.full_name = customerInfo.full_name;
    this.thankYouMessage = "Thank you, " + this.full_name + " !";

    // Resets "full_name" Back to Empty String
    this.full_name = '';
  }

    
  // TEMP: Change into "addToCart()" Function
  // TEMP: Use as Function to Make Parent-Child Relationship with "cart" & "product-item" Components?
  // TEMP: OR use in Service File?
  itemPurchaseAmount(/*chosenItem: Item[]*/): void {
    //this.chosenItem = chosenItem;
  }
}
