import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Billing_Info } from "../../models/Billing-Info";
import { BillingInformation } from "../../components/billing-information/billing-information";
// import { Confirmation } from "../../components/confirmation/confirmation";
import { Item } from '../../models/Item';
import { ProductItem } from "../../components/product-item/product-item";

@Component({
  selector: 'app-cart',
  imports: [BillingInformation,  ProductItem],
  templateUrl: './cart.html',
  styleUrl: './cart.component.css',
})
export class Cart implements OnInit {
  // Parent Component of "billing-information" & "product-item" Components
  chosenItem: Item[] = [];

  full_name: string = '';
  thankYouMessage: string = "Thank you, " + this.full_name + " !";

  //@Input() customer_full_name: string = '';
  customer_full_name: string = '';
  //message: string = "Thank you, " + this.customer_full_name + " !";

  // Ensures Message Remains SEPARATE Before Emitting ACTUAL Thank You Message
  message: string = '';

  //@Input() message: string = '';
  //@Output() full_name: string = '';
  //@Output() messageEmitter: EventEmitter<string> = new EventEmitter<string>();
  //@Output() messageEmitter: EventEmitter<string> = new EventEmitter();
  //@Output() message: EventEmitter<string> = new EventEmitter();
  //@Output() message = new EventEmitter<string>();

  constructor(/*private confirmation: Confirmation*/) { /*confirmation.thankYouMessage = this.message;*/ }

  ngOnInit(): void { }

  createThankYouMessage() {}

  // Obtains Customer Name to Use in "confirmation" Webpage
  obtainBillingInfo(customerInfo: Billing_Info): void {
    this.full_name = customerInfo.full_name;
    this.thankYouMessage = "Thank you, " + this.full_name + " !";

    // Resets "full_name" Back to Empty String
    this.full_name = '';

    // TEMP: option 1
    this.customer_full_name = customerInfo.full_name;
    this.message = "Thank you, " + this.customer_full_name + " !";/**/

    // TEMP: option 2
    //this.message = "Thank you, " + customerInfo.full_name + " !";

    //this.thankYouMessage = this.message;

    //this.messageEmitter.emit(this.message);

    // Resets "customer_full_name" Back to Empty String
    this.customer_full_name = '';
  }

  // TEMP: function is UNFINISHED
  // TEMP: figure out how to Obtain item ID First
  itemPurchaseAmount(/*chosenItem: Item[]*/): void {
    //this.chosenItem = chosenItem;
  }
}
