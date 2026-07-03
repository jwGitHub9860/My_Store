// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, Input, inject, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Item } from '../../models/Item';
import { ProductItemService } from "../../services/product-item/product-item";

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.component.css',
})
export class ProductItem implements OnInit {
  itemAmountList: number[];
  showMessage: boolean = true;
  
  // Values for Parent-Child Relationship between "product-list" & "product-item" Components
  @Input() item: Item;
  
  // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  constructor(private productItemService: ProductItemService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);

    this.itemAmountList = [ 0, 0, 0, 0, 0, 0 ];
    this.item = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void { }

  // Submits Chosen Item to "product-item" Service File AND Moves to "product-item-detail" Webpage
  submitChosenItem(id: number): void {
    this.productItemService.setChosenItemId(id);

    // Navigates to Item Details Webpage
    // Ensures "item-details" Webpage Opens WHEN Item Image is Clicked On
    // ONLY WAY to Move from "product-list" Webpage to "product-item-detail" Webpage WITHOUT RESETTING Chosen Item ID
    this.router.navigate(['item-details'], {relativeTo: this.route});
  }

  addItemsToCart(id: number, price: number): void {
    this.productItemService.setItemPurchaseAmount(this.itemAmountList[id - 1], id, price);
    this.productItemService.setTotalPurchaseCost(this.itemAmountList[id - 1], price);

    // Displays Feedback when Item is Added to Cart
    this.showMessage = true;
    if (this.showMessage) {
      alert("Added new item to cart!");
      setTimeout(() => this.showMessage = false, 2000);
    }
  }
}
