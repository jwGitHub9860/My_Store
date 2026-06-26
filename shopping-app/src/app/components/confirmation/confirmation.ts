import { Component, OnInit } from '@angular/core';
import { BillingInformationService } from "../../services/billing-information/billing-information";
import { ProductItemService } from "../../services/product-item/product-item";

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.component.css',
})
export class Confirmation implements OnInit {
  customerName: string;
  totalPurchaseCost: number;
  
  constructor(private billingInformationService: BillingInformationService, private productItemService: ProductItemService) {
    this.customerName = '';
    this.totalPurchaseCost = 0;
  }

  ngOnInit(): void {
    this.customerName = this.billingInformationService.getCustomerName();
    this.totalPurchaseCost = this.productItemService.getTotalPurchaseCost();
  }
}
