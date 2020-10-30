import { Component, OnInit } from '@angular/core';
import { MerchantService } from './../merchant.service';

@Component({
  selector: 'app-merchant-orders',
  templateUrl: './merchant-orders.component.html',
  styleUrls: ['./merchant-orders.component.less'],
  providers: [MerchantService]
})
export class MerchantOrdersComponent implements OnInit {

  constructor(
  	private merchantService: MerchantService,
 	) {
 	}

  ngOnInit() {
  	this.merchantService.orders()
  		.subscribe(res => {
  			console.log(res);
  		});
  }

}
