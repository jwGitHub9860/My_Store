import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  // ONLY WAY to Move to "product-list" Webpage or "cart" Webpage WITHOUT RESETTING Purchase Item Amounts
  private router = inject(Router);

  navigateToProductList() { this.router.navigate(['/']); }

  navigateToCart() { this.router.navigate(['/cart']); }
}
