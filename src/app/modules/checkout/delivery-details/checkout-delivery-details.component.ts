import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CartService from '@shared/service/cart.service';
import { CustomerDeliveryDetails } from '@shared/class/shopping-cart';

@Component({
  selector: 'app-checkout-delivery-details',
  templateUrl: './checkout-delivery-details.component.html',
  styleUrls: ['./checkout-delivery-details.component.less']
})
export class CheckoutDeliveryDetailsComponent {
	public form: FormGroup;
  public cart: any;

  constructor(
  	private cartService: CartService,
  	private fb: FormBuilder,
  	private router: Router
 	) {
    this.cart = cartService.cart;
  	this.initiateForm();
 	}

  initiateForm(): void {
  	const storedData = this.cartService.cart.getCustomerDeliveryDetails();
    this.form = this.fb.group({
      name: [storedData.name, Validators.required],
      shippingAddress: [storedData.shippingAddress, Validators.required],
      contactNo: [storedData.contactNo, Validators.required]
    });
  }

  prepareFields(): void {
    for (const field in this.form.controls) {
      this.form.get(field).markAsDirty();
    }
    
  	if (this.form.valid) {
  		this.submit();
  	}
  }

  submit(): void {
  	this.cartService.updateDeliveryDetails(this.form.value);
  	this.router.navigate(['/order/summary']);
  }

}
