import { Component, OnInit } from '@angular/core';
import { BillingInformationService } from "../../services/billing-information/billing-information";

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.component.css',
})
export class Confirmation implements OnInit {
  customerName: string;
  
  constructor(private billingInformationService: BillingInformationService) {
    this.customerName = '';
  }

  ngOnInit(): void {
    this.customerName = this.billingInformationService.getCustomerName();

    // TEMP: get "total_purchase_cost" HERE
  }
}
