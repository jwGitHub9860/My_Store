import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/Item";
import { ProductItem } from "../../components/product-item/product-item";

@Component({
  selector: 'app-product-item-detail',
  imports: [ProductItem],
  templateUrl: './product-item-detail.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetail implements OnInit {
  // Child Component of "product-item" Parent Component
  // TEMP: use "chosenItem" as "@Input"?
  chosenItem: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    //
  }

  // TEMP: function is UNFINISHED
  // TEMP: figure out how to Obtain item ID First
  chosenItemDetails(/*chosenItem: Item[]*/): void {
    //this.chosenItem = chosenItem;
  }
}
