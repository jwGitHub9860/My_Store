import { Injectable } from '@angular/core';

// TEMP: use "Item" Model or Not?
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

  constructor() {
    this.chosenItemId = 0;
    this.totalPurchaseCost = 0;

    // Use for "item-details" Webpage
    // Initialize as Zero since "Add to cart" Button will NOT be PRESSED when Application Starts
    this.itemPurchaseAmount = 0;
    
    // Use for "product-list" Webpage
    // Initialize as Zero since "Add to cart" Button will NOT be PRESSED when Application Starts
    this.itemPurchaseAmountList = [ 0, 0, 0, 0, 0, 0 ];
  }

  setChosenItemId(id: number): void { this.chosenItemId = id; }

  getChosenItemId(): number { return this.chosenItemId; }

  // MUST OBTAIN All Purchase Amounts INDIVIDUALLY or Amounts Obtained will be ZERO
  // Only be Obtaining ENTIRE List in "cart" Webpage
  getItemPurchaseAmountList(): number[] {
    let newItemPurchaseAmountList: number[] = [];
    for (let index = 0; index < this.itemPurchaseAmountList.length; index++) {
      newItemPurchaseAmountList[index] = this.itemPurchaseAmountList[index];
    }
    return newItemPurchaseAmountList;
  }

  setItemPurchaseAmount(amount: number, id: number): void { this.itemPurchaseAmountList[id - 1] = amount; }

  // TEMP: CALCULATE Total Item Purchase Amount in This Function?
  setTotalPurchaseCost(cost: number): void { this.totalPurchaseCost = cost; }

  getTotalPurchaseCost(): number { return this.totalPurchaseCost; }
}
