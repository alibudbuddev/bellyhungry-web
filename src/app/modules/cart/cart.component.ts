import { Component, OnInit } from '@angular/core';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
	public items: any[] = [];

  constructor(private cartService: CartService) {
  	this.items = cartService.cart.getItems();
  }

  ngOnInit() {
  }

}
