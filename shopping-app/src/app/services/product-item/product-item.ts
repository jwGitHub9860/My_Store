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

  // TEMP: use in "recordItemPurchaseAmount()" Function for "Add to cart" Button
  // Assign "itemPurchaseAmount" to "itemPurchaseAmountList" Array ELEMENT
  setItemPurchaseAmount(amount: number, id: number): void {
    // TEMP: do I still Need this?
    // Ensures "itemPurchaseAmount" is NOT Changed during Setting Process
    this.itemPurchaseAmount = amount;

    // TEMP: figure out how to Reset "itemPurchaseAmountList" Elements Back to Zero LATER
    this.itemPurchaseAmountList[id - 1] = this.itemPurchaseAmount;
  }

  // TEMP: use in "recordItemPurchaseAmount()" Function for "Add to cart" Button?
  getItemPurchaseAmount(id: number): number {
    for (let index = 0; index < this.itemPurchaseAmountList.length; index++) {
      const currentAmountElement = this.itemPurchaseAmountList[index];
      if (index === (id - 1)) {
        this.itemPurchaseAmount = currentAmountElement;
      }
    }
    return this.itemPurchaseAmount;
  }

  increaseItemPurchaseAmount(id: number): number {
    // Ensures "currentItemAmount" is NOT CHANGED during Increasing Process
    let currentItemAmount = this.itemPurchaseAmountList[id - 1];

    currentItemAmount += 1;
    return currentItemAmount;
  }

  decreaseItemPurchaseAmount(id: number): number {
    // Ensures "currentItemAmount" is NOT CHANGED during Decreasing Process
    let currentItemAmount = this.itemPurchaseAmountList[id - 1];

    // CANNOT be NEGATIVE Item Amount
    if (currentItemAmount > 0) {
      currentItemAmount -= 1;
    }
    
    return currentItemAmount;
  }

  // TEMP: CALCULATE Total Item Purchase Amount in This Function?
  setTotalPurchaseCost(cost: number): void { this.totalPurchaseCost = cost; }

  getTotalPurchaseCost(): number { return this.totalPurchaseCost; }
}
