import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CartService from '@shared/service/cart.service';
import { CustomerDeliveryDetails } from '@shared/class/shopping-cart';
import { OrderService } from '@shared/service/order.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.less'],
  providers: [OrderService]
})
export class CheckoutSummaryComponent implements OnInit {
	public items: any[] = [];
  public customerDeliveryDetails: CustomerDeliveryDetails;
  public isLoading: boolean;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {
    this.customerDeliveryDetails = cartService.cart.getCustomerDeliveryDetails();
  	this.items = cartService.cart.getItems();
  }

  ngOnInit() {
  }

  trackByProduct(index, item) {
  	return item.product;
  }

  placeOrder(): void {
  	this.isLoading = true;
    const items = this.cartService.cart
    const order = {
      customerDetails: this.customerDeliveryDetails,
      items: this.items.map(x => {
        let item = {
          product: x.product,
          merchant: x.merchant._id,
          price: x.price,
          qty: x.qty
        };
        return item;
      })
    };
    this.orderService.create(order)
      .subscribe(res => {
        this.cartService.init();
        this.cartService.updatView();
        this.router.navigate(['/order', res._id], {queryParams: {succcess: 1}});
      });
  }

}
