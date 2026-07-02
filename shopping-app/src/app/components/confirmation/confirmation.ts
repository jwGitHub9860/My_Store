import { Component, OnInit, inject } from '@angular/core';
import { DecimalPipe } from "@angular/common";
import { Router } from "@angular/router";
import { BillingInformationService } from "../../services/billing-information/billing-information";
import { ProductItemService } from "../../services/product-item/product-item";

@Component({
  selector: 'app-confirmation',
  imports: [DecimalPipe],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.component.css',
})
export class Confirmation implements OnInit {
  customerName: string;
  totalPurchaseCost: number;

  private router = inject(Router);
  
  constructor(private billingInformationService: BillingInformationService, private productItemService: ProductItemService) {
    this.customerName = '';
    this.totalPurchaseCost = 0;
  }

  ngOnInit(): void {
    this.customerName = this.billingInformationService.getCustomerName();
    this.totalPurchaseCost = this.productItemService.getTotalPurchaseCost();
  }

  navigateToProductList() {
    this.router.navigate(['/']);
    this.productItemService.resetItemPurchaseAmountList();
  }
}
