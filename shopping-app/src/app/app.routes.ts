import { Routes } from '@angular/router';
import { Cart } from "./components/cart/cart";
import { Confirmation } from "./components/confirmation/confirmation";

// TEMP: keep or remove "product-item"?
import { ProductItem } from "./components/product-item/product-item";

import { ProductItemDetail } from "./components/product-item-detail/product-item-detail";
import { ProductList } from './components/product-list/product-list';

// "routes" MUST BE "@NgModule" type to Allow "app.ts" Access to "routes"
export const routes: Routes = [
    { path: 'cart', component: Cart },
    { path: 'confirmation', component: Confirmation },

    // TEMP: change "path" values?
    { path: 'item', component: ProductItem },
    { path: 'item-details', component: ProductItemDetail },

    // Homepage
    { path: '', component: ProductList }
];
