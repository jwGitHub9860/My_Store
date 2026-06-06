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
  itemPurchaseAmount: number;
  totalPurchaseCost: number;

  // Keep SEPARATE from ORIGINAL Item List Data to Prevent Accidental Changes to Item List
  itemPurchaseAmountList: number[];

  // TEMP: use "Observable" or Not?
  constructor(private http: HttpClient) {
    this.chosenItemId = 0;
    this.totalPurchaseCost = 0;

    // Used for "item-details" Webpage
    this.itemPurchaseAmount = 0;
    
    // Used for "product-list" Webpage
    this.itemPurchaseAmountList = [ 0, 0, 0, 0, 0, 0 ];
  }

  setChosenItemId(id: number): void { this.chosenItemId = id; }

  getChosenItemId(): number { return this.chosenItemId; }

  // TEMP: will I Need Setter for "itemPurchaseAmountList"?

  getItemPurchaseAmountList(): number[] { return this.itemPurchaseAmountList; }

  setItemPurchaseAmount(amount: number, id: number): void { this.itemPurchaseAmountList[id - 1] = amount; }

  // TEMP: use in "addToCart()" Function to Obtain Items in "cart" Webpage?
  getItemPurchaseAmount(id: number): number {
    for (let index = 0; index < this.itemPurchaseAmountList.length; index++) {
      const currentAmountElement = this.itemPurchaseAmountList[index];
      if (index === (id - 1)) {
        this.itemPurchaseAmount = currentAmountElement;
      }
    }
    return this.itemPurchaseAmount;
  }

  // TEMP: use in "cart" Webpage when "Submit" Button is Pressed?
  // TEMP: OR use in "confirmation" Webpage when "Back to product list" Button is Pressed? (to Prevent Accidental Changes)
  resetItemPurchaseAmountList(): void {
    for (let index = 0; index < this.itemPurchaseAmountList.length; index++) {
      this.itemPurchaseAmountList[index] = 0;
    }
  }

  // TEMP: CALCULATE Total Item Purchase Amount in This Function?
  setTotalPurchaseCost(cost: number): void { this.totalPurchaseCost = cost; }

  getTotalPurchaseCost(): number { return this.totalPurchaseCost; }
}
