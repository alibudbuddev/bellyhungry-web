import { Component, OnInit } from '@angular/core';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-checkout-delivery-details',
  templateUrl: './checkout-delivery-details.component.html',
  styleUrls: ['./checkout-delivery-details.component.less']
})
export class CheckoutDeliveryDetailsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
