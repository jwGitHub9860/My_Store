import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductListService } from "../../services/product-list/product-list";
import { ProductItemService } from "../../services/product-item/product-item";
import { Item } from '../../models/Item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  items: Item[] = [];

  // TESTING CODE
  //items$!: Observable<Item[]>;
  
  itemAmountList: number[] = [ 0, 0, 0, 0, 0, 0 ];

  private productListServiceTest = inject(ProductListService);

  // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private productItemService: ProductItemService, private productListService: ProductListService) {
    // TESTING CODE
    /*effect(() => {
      this.items$ = this.productListService.getItemList();
    })*/
  }
  
  ngOnInit() {
    console.log("ngOnInit START");
    //this.items = this.productListService.getItemList();

    // Returns "Observable" (stream of data)
    // Does NOT Return raw data anymore
    this.productListService.getItemList().subscribe(/*res =>*/ {
      //this.items = res;
      next: (res) => {
        console.log("Received items:", res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
    });/**/

    this.itemAmountList = this.productItemService.getItemPurchaseAmountList();
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

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  increaseAmount(id: number): void { this.itemAmountList[id - 1] += 1; }

  // Defaults Back to Zero IF "Add to cart" Button is NOT PRESSED
  decreaseAmount(id: number): void {
    // CANNOT be NEGATIVE Item Amount
    if (this.itemAmountList[id - 1] > 0) {
      this.itemAmountList[id - 1] -= 1;
    }
  }

  recordItemPurchaseAmount(id: number): void { this.productItemService.setItemPurchaseAmount(this.itemAmountList[id - 1], id); }
}
