import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBar } from "./components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',

  // MUST Import ALL Components to Define -> templateUrl: './app.html'
  // PREVENTS "[ERROR] NG8001: 'app-product-list' is not a known element"
  imports: [
    RouterOutlet,
    NavBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('shopping-app');
}
