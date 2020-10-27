import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';
import ShoppingCart from '@shared/class/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export default class CartService {
	private cartChangeSource = new Subject<any>();
	public cart$ = this.cartChangeSource.asObservable();
	public cart: ShoppingCart;

  constructor() { }

  init(): void {
  	this.cart = new ShoppingCart();
  }

  addItem(item: any): void {
		this.cart.addItem(item);
		this.updatView();
	}

	updatView(): void {
		localStorage.setItem('cart', JSON.stringify(this.cart));
		this.cartChangeSource.next(this.cart);
	}
}
