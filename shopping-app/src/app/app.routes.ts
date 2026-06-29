import { Routes } from '@angular/router';
import { Cart } from "./components/cart/cart";
import { Confirmation } from "./components/confirmation/confirmation";
import { ProductItemDetail } from "./components/product-item-detail/product-item-detail";
import { ProductList } from './components/product-list/product-list';

// "routes" MUST BE "@NgModule" type to Allow "app.ts" Access to "routes"
export const routes: Routes = [
    { path: 'cart', component: Cart },
    { path: 'confirmation', component: Confirmation },
    { path: 'item-details', component: ProductItemDetail },

    // Homepage
    { path: '', component: ProductList }
];
