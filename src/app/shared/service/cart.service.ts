import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	private cartChangeSource = new Subject<any>();
	public cart$ = this.cartChangeSource.asObservable();
	public cartMetaData: any;

  constructor() { }

  updateCart(): void {
  	this.user = user;
    this.cartChangeSource.next(this.user);
  }
}
