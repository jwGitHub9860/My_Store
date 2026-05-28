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
    this.itemAmount = this.productItemService.getItemPurchaseAmount();
    
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

  increaseAmount(): void {
    this.productItemService.increaseItemPurchaseAmount();
    this.itemAmount = this.productItemService.getItemPurchaseAmount();
  }

  decreaseAmount(): void {
    this.productItemService.decreaseItemPurchaseAmount();
    this.itemAmount = this.productItemService.getItemPurchaseAmount();
  }
}
