import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',

  // MUST USE to Define -> templateUrl: './app.html'
  // PREVENTS "[ERROR] NG8001: 'app-product-list' is not a known element"
  standalone: true,
  
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.component.css',
})
export class ProductList implements OnInit {
  ngOnInit(): void {
      //
  }
}
