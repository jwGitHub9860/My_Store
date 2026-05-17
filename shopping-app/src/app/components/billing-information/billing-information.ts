import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Billing_Info } from "../../models/Billing-Info";

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

  constructor() {}

  ngOnInit(): void { }
  
  submitBillingInfo(): void {
    const customerInfo = {
      full_name: this.full_name,
      address: this.address,
      credit_card_number: this.credit_card_number
    }

    this.obtainBillingInfo.emit(customerInfo);
    
    // Resets "full_name", "address", and "credit_card_number" Back to Empty Strings
    this.full_name = '';
    this.address = '';
    this.credit_card_number = '';
  }
}
