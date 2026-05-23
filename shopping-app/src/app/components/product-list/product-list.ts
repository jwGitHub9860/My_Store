import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductListService } from "../../services/product-list/product-list";
import { Item } from '../../models/Item';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  items: Item[] = [];

  // Sends Chosen Item to "product-item" Parent Component
  @Output() chosenItemDetails: EventEmitter<Item> = new EventEmitter();

  constructor(private productListService: ProductListService) { }
  
  ngOnInit() {
    this.items = this.productListService.getItemList();
    
    // TEMP: use Data in "data.json" file or Not?
    // Returns "Observable" (stream of data)
    // Does NOT Return raw data anymore
    /*this.productListService.getItemList().subscribe(res => {
      this.items = res;
    });*/
  }

  // Submits Chosen Item to "product-item" Component
  submitChosenItem(id: number): void {
    for (let index = 0; index < this.items.length; index++) {
      const currentItem = this.items[index];
      if (currentItem.id === id) {
        // MUST Obtain Chosen Item DIRECTLY From Item List or Chosen Item will FAIL to Send Correctly
        const chosenItem: Item = {
          id: currentItem.id,
          name: currentItem.name,
          price: currentItem.price,
          url: currentItem.url,
          description: currentItem.description
        };

        this.chosenItemDetails.emit(chosenItem);
      }
    }
  }
}
