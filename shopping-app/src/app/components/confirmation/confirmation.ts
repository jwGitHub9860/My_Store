import { Component, OnInit, Input } from '@angular/core';
//import { Billing_Info } from "../../models/Billing-Info";
import { Cart } from "../../components/cart/cart";

@Component({
  selector: 'app-confirmation',
  imports: [Cart/**/],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.component.css',
})
export class Confirmation implements OnInit/**/ {
  //@Input() full_name: string = '';
  //@Input() full_name: string;
  //@Input() customer_full_name: string = '';
  @Input() thankYouMessage: string = '';
  //@Input() thankYouMessage = '';
  //full_name: string = '';
  //customer_full_name: string = '';
  //billing_info: Billing_Info[] = [];
  //thankYouMessage: string = "Thank you, " + this.full_name + " !";
  //thankYouMessage: string = '';
  //thankYouMessage = Cart.message;

  constructor(/*private cart: Cart*/) { /*this.thankYouMessage = cart.message;*/ }

  ngOnInit(): void {
    /*this.full_name = 
    if (name) {
      this.thankYouMessage = `Thank you, ${name}!`;
    }*/

    // TEMP: use Data in "data.json" file or Not?
    // Returns "Observable" (stream of data)
    // Does NOT Return raw data anymore
    /*this.cart.getItemList().subscribe(res => {
      this.items = res;
    });*/
  }

  // Obtains Customer Name to Use in "confirmation" Webpage
//  messageEmitter(message: string): void {
    //this.full_name = customerInfo.full_name;
    //this.thankYouMessage = "Thank you, " + this.full_name + " !";
    //this.thankYouMessage = "Thank you, " + customerInfo.full_name + " !";
    //this.thankYouMessage.unshift(customerInfo.full_name);
    //this.thankYouMessage = `Thank you, ${customerInfo.full_name}!`;
    //this.thankYouMessage = `Thank you, ${this.cart.customerInfo.full_name}!`;
    //this.thankYouMessage = `Thank you, ${this.customer_full_name}!`;
    //this.thankYouMessage = `Thank you, ${this.cart.full_name}!`;
    //this.thankYouMessage = `Thank you, ${customerInfo.full_name}!`;
//    this.thankYouMessage = message;

    // Resets "full_name" Back to Empty String
    //this.full_name = '';

    // Resets "thankYouMessage" Back to Empty String
//    this.thankYouMessage = '';
//  }
}
