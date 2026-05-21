import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductItem } from "../../components/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";
import { Item } from '../../models/Item';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  items: Item[] = [];

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
}
