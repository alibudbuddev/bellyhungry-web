import { Component, OnInit } from '@angular/core';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.less']
})
export class CheckoutSummaryComponent implements OnInit {
		public items: any[] = [];

  constructor(private cartService: CartService) {
  	this.items = this.cartService.cart.getItems();
  }

  ngOnInit() {
  }

  trackByProduct(index, item) {
  	return item.product;
  }

  placeOrder(): void {
  	
  }

}
