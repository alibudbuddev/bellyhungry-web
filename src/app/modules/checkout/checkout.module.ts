import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutDeliveryDetailsComponent } from './delivery-details/checkout-delivery-details.component';
import { CheckoutSummaryComponent } from './summary/checkout-summary.component';

@NgModule({
  declarations: [CheckoutComponent, CheckoutDeliveryDetailsComponent, CheckoutSummaryComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
