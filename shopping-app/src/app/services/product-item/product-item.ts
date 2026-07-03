import { Injectable } from '@angular/core';

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

  // Resets Chosen Item Purchase Amount back to Zero AND Sets NEW Total Purchase Cost
  removePurchaseItem(newAmount: number, removeId: number, price: number): void {
    this.itemPurchaseAmountList[removeId] = 0;
    this.totalPurchaseCost -= newAmount * price;
  }

  setItemPurchaseAmount(amount: number, id: number, price: number): void {
    // Part Of RECALCULATING TOTAL Purchase COST when Item Purchase AMOUNT(S) are CHANGED
    // Checks if Purchase Amount Used To Be Zero BEFORE Total Purchase Cost is Calculated
    if (this.itemPurchaseAmountList[id - 1] !== 0) {
      // Subtracts PREVIOUS Calculated Amount to Prevent Incorrect purchase cost Calculation
      this.totalPurchaseCost -= this.itemPurchaseAmountList[id - 1] * price;
    }

    this.itemPurchaseAmountList[id - 1] = amount;
  }

  // CALCULATES & Sets Total Purchase Cost
  setTotalPurchaseCost(itemAmount: number, itemPrice: number): void { this.totalPurchaseCost += itemAmount * itemPrice; }

  getTotalPurchaseCost(): number { return this.totalPurchaseCost; }

  resetItemPurchaseAmountList(): void {
    for (let index = 0; index < this.itemPurchaseAmountList.length; index++) {
      this.itemPurchaseAmountList[index] = 0;
    }
  }
}
