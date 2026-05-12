import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// CANNOT import "routes" from "./app.routes"
// Importing "routes" Causes "[ERROR] NG1010: 'imports' must be an array of components, directives, pipes, or NgModules."
import { Cart } from "./components/cart/cart";
import { Confirmation } from "./components/confirmation/confirmation";
import { NavBar } from "./components/nav-bar/nav-bar";
import { ProductItem } from "./components/product-item/product-item";
import { ProductItemDetail } from "./components/product-item-detail/product-item-detail";
import { ProductList } from './components/product-list/product-list';

// MUST IMPORT "services" to Create Links for "Product List" & "Cart" Text
import { ProductListService } from "./services/product-list/product-list";

@Component({
  selector: 'app-root',

  // MUST Import ALL Components to Define -> templateUrl: './app.html'
  // PREVENTS "[ERROR] NG8001: 'app-product-list' is not a known element"
  imports: [
    RouterOutlet,
    Cart,
    Confirmation,
    NavBar,
    ProductItem,
    ProductItemDetail,
    ProductList
  ],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopping-app');

  constructor(private productListService: ProductListService) { }
}
