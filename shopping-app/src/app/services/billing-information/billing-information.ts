import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BillingInformationService {
  customerName: string;

  constructor() { this.customerName = ''; }

  setCustomerName(name: string): void { this.customerName = name; }

  getCustomerName(): string { return this.customerName; }
}
