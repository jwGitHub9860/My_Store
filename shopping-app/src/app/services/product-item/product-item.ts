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
export class ProductItemService {
  chosenItemId: number;
  totalPurchaseCost: number;

  // TEMP: use "Observable" or Not?
  constructor(private http: HttpClient) {
    this.chosenItemId = 0;
    this.totalPurchaseCost = 0;
  }

  setChosenItemId(id: number): void { this.chosenItemId = id; }

  getChosenItemId(): number { return this.chosenItemId; }

  // TEMP: CALCULATE Total Item Purchase Amount in This Function?
  setTotalPurchaseCost(cost: number) { this.totalPurchaseCost = cost; }

  getTotalPurchaseCost(): number { return this.totalPurchaseCost; }
}
