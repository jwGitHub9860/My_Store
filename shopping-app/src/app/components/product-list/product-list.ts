import { Component, OnInit } from '@angular/core';
import { ProductListService } from "../../services/product-list/product-list";
import { Item } from '../../models/Item';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  items: Item[] = [];

  constructor(private productListService: ProductListService) { }
  
  ngOnInit(): void {
    // Returns "Observable" (stream of data)
    // Does NOT Return raw data anymore
    this.productListService.getItemList().subscribe(res => {
      this.items = res;
    });
  }
}
