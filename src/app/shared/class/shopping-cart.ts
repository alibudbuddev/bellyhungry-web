export default class ShoppingCart {
	private items: [];
	private totalPrice: number = 0;

	constructor(items: any[] = []) {
		if (items.length > 0) {
			this.calculate(items);
		}
	}

	getItems(): any[] {
		return this.items;
	}

	addItem(item: any): void {
		this.items.push(item);
		this.calculate();
	}

	removeItem(index: number): void {
		this.items.slice(index, 1);
		this.calculate();
	}

	private calculate(items: any[] = []): void {
		this.items = items.forEach(item => {
			item = this.calculateItemTotalPrice(item);
			return item;
		});
		this.calculateTotalAmount();
	}

	private calculateItemTotalPrice(item: any): any {
		item.totalPrice = item.qty * item.price;
		return item;
	}

	private calculateTotalAmount(): number {
		let total = 0;
		for (var i = 0; i <= this.items.length; i++) {
			total += this.items[i].totalPrice;
		}
		this.totalPrice = totalPrice;
	}
}