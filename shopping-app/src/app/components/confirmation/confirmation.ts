import { Component, OnInit, Input } from '@angular/core';
import { Cart } from "../../components/cart/cart";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-confirmation',
  imports: [Cart],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.component.css',
})
export class Confirmation implements OnInit {
  params: any;
  thankYouMessage: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params;
    });

    if (this.params['full_name']) {
      this.thankYouMessage = `Thank you, ${this.params.full_name}!`;
    }
  }
}
