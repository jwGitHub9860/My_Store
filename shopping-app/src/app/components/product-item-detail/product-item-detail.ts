// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
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

  // Receives Item List from "Observable"
  allItems$!: Observable<Item[]>;

  constructor(private productItemService: ProductItemService, private productListService: ProductListService, private ngZone: NgZone) {
    this.chosenItem = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: ''
    };

    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);
  }

  ngOnInit(): void {
    // Ensures items$ is an "Observable" for the "async pipe"
    // If the service returns a plain array, wrap it with `of()` to convert to Observable.

    // TEMP: Attempt 1
    this.allItems$ = this.productListService.getItemList();

    // TEMP: Attempt 2
    /*const itemList = this.productListService.getItemList();
    this.allItems$ = Array.isArray(itemList) ? of(itemList) : itemList;*/
    
    // Obtains Chosen Item ID
    this.chosenItemId = this.productItemService.getChosenItemId();

    // Obtains Details of Chosen Item WHILE Preventing "chosenItem" from Resetting
    this.allItems$.subscribe(items => {
      // CANNOT USE "index" Because "allItems" Uses "any" Type ("!")
      const currentItem = items.find(item => item.id === this.chosenItemId);
      if (currentItem) {
        this.chosenItem = {
          id: currentItem.id,
          name: currentItem.name,
          price: currentItem.price,
          url: currentItem.url,
          description: currentItem.description
        };
      }
    });
  }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  increaseAmount(): void { this.itemAmount += 1; }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  decreaseAmount(): void {
    // CANNOT be NEGATIVE Item Amount
    if (this.itemAmount > 0) {
      this.itemAmount -= 1;
    }
  }

  recordItemPurchaseAmount(id: number): void { this.productItemService.setItemPurchaseAmount(this.itemAmount, id); }
}
