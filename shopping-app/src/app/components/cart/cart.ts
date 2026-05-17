import { Component, OnInit } from '@angular/core';
import { Billing_Info } from "../../models/Billing-Info";
import { BillingInformation } from "../../components/billing-information/billing-information";

@Component({
  selector: 'app-cart',
  imports: [BillingInformation],
  templateUrl: './cart.html',
  styleUrl: './cart.component.css',
})
export class Cart implements OnInit {
  full_name: string = '';
  thankYouMessage: string = "Thank you, " + this.full_name + " !";

  constructor() {}

  ngOnInit(): void { }

  // Obtains Customer Name to Use in "confirmation" Webpage
  obtainBillingInfo(customerInfo: Billing_Info): void {
    this.full_name = customerInfo.full_name;
    this.thankYouMessage = "Thank you, " + this.full_name + " !";

    // Resets "full_name" Back to Empty String
    this.full_name = '';
  }
}
