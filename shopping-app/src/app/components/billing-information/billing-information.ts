import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Billing_Info } from "../../models/Billing-Info";
import { BillingInformationService } from "../../services/billing-information/billing-information";

@Component({
  selector: 'app-billing-information',
  imports: [FormsModule],
  templateUrl: './billing-information.html',
  styleUrl: './billing-information.css',
})
export class BillingInformation implements OnInit {
  full_name: string = '';
  address: string = '';
  credit_card_number: string = '';

  @Output() obtainBillingInfo: EventEmitter<Billing_Info> = new EventEmitter();

  constructor(private billingInformationService: BillingInformationService, private router: Router) {}

  ngOnInit(): void { this.full_name = this.billingInformationService.getCustomerName(); }
  
  submitBillingInfo(): void {
    const customerInfo = {
      full_name: this.full_name,
      address: this.address,
      credit_card_number: this.credit_card_number
    }

    this.billingInformationService.setCustomerName(this.full_name);

    // Navigates to Confirmation Webpage
    // Ensures "confirmation" Webpage Opens WHEN "Submit" Button is Clicked On
    // ONLY WAY to Move from "cart" Webpage to "confirmation" Webpage WITHOUT RESETTING Customer Name & Credit Card Number
    this.router.navigate(['confirmation']);

    this.obtainBillingInfo.emit(customerInfo);
    
    // Resets "full_name", "address", and "credit_card_number" Back to Empty Strings
    this.full_name = '';
    this.address = '';
    this.credit_card_number = '';
  }
}
