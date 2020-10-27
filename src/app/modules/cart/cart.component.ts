import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit, OnDestroy {
	public items: any[] = [];
	private cartSubscription: Subscription;

  constructor(private cartService: CartService) {
  	this.items = this.cartService.cart.getItems();
  }

  ngOnInit() {
  	this.cartSubscription =
	  	this.cartService.cart$.subscribe(data => {
	  		this.items = data.items;
	  	});
  }

  onRemoveItemClick(index: number): void {
  	this.cartService.removeItem(index);
  }

  trackByProduct(index, item) {
  	return item.product;
  }

  ngOnDestroy() {
  	if (this.cartSubscription) {
  		this.cartSubscription.unsubscribe();
  	}
  }

}
