import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CartService from '@shared/service/cart.service';
import { CustomerDeliveryDetails } from '@shared/class/shopping-cart';

@Component({
  selector: 'app-checkout-delivery-details',
  templateUrl: './checkout-delivery-details.component.html',
  styleUrls: ['./checkout-delivery-details.component.less']
})
export class CheckoutDeliveryDetailsComponent implements OnInit {
	public form: FormGroup;

  constructor(
  	private cartService: CartService,
  	private fb: FormBuilder,
  	private router: Router
 	) {
  	this.initiateForm();
 	}

  ngOnInit() {
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
  	if (this.form.valid) {
  		this.submit();
  	}
  }

  submit(): void {
  	this.cartService.updateDeliveryDetails(this.form.value);
  	this.router.navigate(['/checkout/summary']);
  }

}
