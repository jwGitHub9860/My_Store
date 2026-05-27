import { Injectable } from '@angular/core';

// TEMP: use "Observable" or Not?
// Allows Requests to be Made
import { HttpClient } from "@angular/common/http";

// TEMP: use "Observable" or Not?
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root',
})
export class BillingInformation {
  customerName: string;

  // TEMP: use "Observable" or Not?
  constructor(private http: HttpClient) { this.customerName = ''; }

  setCustomerName(name: string) { this.customerName = name; }

  getCustomerName(): string { return this.customerName; }
}
