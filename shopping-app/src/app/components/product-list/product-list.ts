import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductListService } from "../../services/product-list/product-list";
import { ProductItemService } from "../../services/product-item/product-item";
import { Item } from '../../models/Item';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  items: Item[] = [];
  itemAmount: number = 0;

  // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private productItemService: ProductItemService, private productListService: ProductListService) { }
  
  ngOnInit() {
    this.items = this.productListService.getItemList();
    
    // TEMP: use Data in "data.json" file or Not?
    // Returns "Observable" (stream of data)
    // Does NOT Return raw data anymore
    /*this.productListService.getItemList().subscribe(res => {
      this.items = res;
    });*/

    this.itemAmount = this.productItemService.getItemPurchaseAmount();
  }

  // Submits Chosen Item to "product-item" Component
  submitChosenItem(id: number): void {
    // Stores Chosen Item ID in "product-item" Service File
    this.productItemService.setChosenItemId(id);

    // Navigates to Item Details Webpage
    // Ensures "item-details" Webpage Opens WHEN Item Image is Clicked On
    // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
    this.router.navigate(['item-details'], {relativeTo: this.route});
  }
}
