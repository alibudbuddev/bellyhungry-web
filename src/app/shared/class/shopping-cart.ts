import { findIndex, sumBy } from 'lodash';

export interface ItemInterface {
	product: string;
	productDetails: any;
	merchant: string;
	price: string;
	totalPrice?: number;
	qty: number;
}

export class DeliveryDetails {
	name: string;
  shippingAddress: string;
  contactNo: string;
  facebookName?: string
  contactEmail?: string
  other?: string

  constructor() {
  	this.name = '';
		this.shippingAddress = '';
		this.contactNo = '';
  }
}

export default class ShoppingCart {
	private items: ItemInterface[] = [];
	private totalPrice: number = 0;
	private totalItems: number = 0;
	private deliveryDetails: DeliveryDetails = new DeliveryDetails();

	constructor(items: any[] = []) {
		if (items.length > 0) {
			this.calculate(items);
		} else {
			let cartHistory = localStorage.getItem('cartHistory');
			if (cartHistory) {
				this.calculate(JSON.parse(cartHistory).items);
			}
		}
	}

	getItems(): any[] {
		return this.items;
	}

	updateItem(item: ItemInterface): void {
		const currentItemIndex: any = findIndex(this.items, {product: item.product});
		if (currentItemIndex >= 0) {
			this.items[currentItemIndex] = item;
			this.calculate(this.items);
		}
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
		this.items.splice(index, 1);
		this.calculate(this.items);
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
			this.totalItems += data.qty;
		});

		this.totalItems = sumBy(this.items, 'qty');
		this.totalPrice = totalPrice;
	}
}