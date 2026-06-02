import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/Item";
import { ProductItemService } from "../../services/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-item-detail',
  imports: [],
  templateUrl: './product-item-detail.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetail implements OnInit {
  chosenItemId: number = 0;
  chosenItem: Item;
  itemAmount: number = 0;
  allItems: Item[] = [];

  constructor(private productItemService: ProductItemService, private productListService: ProductListService) {
    this.chosenItem = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: ''
    };
  }

  ngOnInit(): void {
    this.allItems = this.productListService.getItemList();
    
    // Obtains Chosen Item ID
    this.chosenItemId = this.productItemService.getChosenItemId();

    // Prevents "chosenItem" from Resetting
    for (let index = 0; index < this.allItems.length; index++) {
      const currentItem = this.allItems[index];
      if (currentItem.id === this.chosenItemId) {
        this.chosenItem = {
          id: currentItem.id,
          name: currentItem.name,
          price: currentItem.price,
          url: currentItem.url,
          description: currentItem.description
        };
      };
    };
  }

  // TEMP: find Way to JUST INCREASE "itemAmount", NOT RECORD
  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  increaseAmount(id: number): void {
    const newAmount = this.productItemService.increaseItemPurchaseAmount(id);
    this.productItemService.setItemPurchaseAmount(newAmount, id);
    this.itemAmount = this.productItemService.getItemPurchaseAmount(id);
  }

  // TEMP: find Way to JUST INCREASE "itemAmount", NOT RECORD
  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  decreaseAmount(id: number): void {
    const newAmount = this.productItemService.decreaseItemPurchaseAmount(id);
    this.productItemService.setItemPurchaseAmount(newAmount, id);
    this.itemAmount = this.productItemService.getItemPurchaseAmount(id);
  }

  // TEMP: Create "recordItemPurchaseAmount()" Function to RECORD Item Purchase Amount
}
