// "NgZone" - Prevents Angular Applications from being Zoneless
// "NgZone" - Performs Change Detection for "Observable"
import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';
import { ProductItem } from "../../components/product-item/product-item";
import { ProductListService } from "../../services/product-list/product-list";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  // Receives Item List from "Observable"
  items$!: Observable<Item[]>;
  
  constructor(private productListService: ProductListService, private ngZone: NgZone) {
    // Checks if Application is Currently Running in Zoneless Mode
    console.log('Constructor zone:', this.ngZone.constructor.name);
  }
  
  ngOnInit(): void {
    // Uses "AsyncPipe" to Refresh User Interface
    // "AsyncPipe" -> Receives New Value from "Observable"
    // Do NOT NEED "subscribe" Call
    this.items$ = this.productListService.getItemList();
  }
}
