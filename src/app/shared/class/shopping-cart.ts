import { findIndex, updateWith } from 'lodash';

interface ItemInterface {
	product: string;
	merchant: string;
	price: string;
	totalPrice?: number;
	qty: number;
}

export default class ShoppingCart {
	private items: ItemInterface[] = [];
	private totalPrice: number = 0;

	constructor(items: any[] = []) {
		if (items.length > 0) {
			this.calculate(items);
		} else {
			// console.log(localStorage.getItem('cartItems'));
		}
	}

	getItems(): any[] {
		return this.items;
	}

	addItem(item: ItemInterface): void {
		if (!item.hasOwnProperty('totalPrice')) {
			item.totalPrice = 0;
		}

		// Check if item is already in the cart.
		const currentItemIndex: any = findIndex(this.items, {product: item.product});

		if (currentItemIndex >= 0) {
			item.qty += this.items[currentItemIndex].qty;
			this.items.splice(currentItemIndex, 1, item);
		} else {
			this.items.push(item);
		}
		this.calculate(this.items);
	}

	removeItem(index: number): void {
		this.items.slice(index, 1);
		this.calculate();
	}

	private calculate(items: any[] = []): any {
		this.items = items.map(item => {
			item = this.calculateItemTotalPrice(item);
			return item;
		});
		this.calculateTotalAmount();
	}

	private calculateItemTotalPrice(item: any): any {
		item.totalPrice = item.qty * item.price;
		return item;
	}

	private calculateTotalAmount(): any {
		let totalPrice = 0;
		this.items.forEach(data => {
			totalPrice += data.totalPrice;
		});
		this.totalPrice = totalPrice;
	}
}