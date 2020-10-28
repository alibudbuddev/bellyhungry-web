import { Component, OnInit } from '@angular/core';
import CartService from '@shared/service/cart.service';
import { CustomerDeliveryDetails } from '@shared/class/shopping-cart';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.less']
})
export class CheckoutSummaryComponent implements OnInit {
	public items: any[] = [];
  public customerDeliveryDetails: CustomerDeliveryDetails;

  constructor(private cartService: CartService) {
    this.customerDeliveryDetails = cartService.cart.getCustomerDeliveryDetails();
    console.log(this.customerDeliveryDetails);
  	this.items = cartService.cart.getItems();
  }

  ngOnInit() {
  }

  trackByProduct(index, item) {
  	return item.product;
  }

  placeOrder(): void {
  	
  }

}
