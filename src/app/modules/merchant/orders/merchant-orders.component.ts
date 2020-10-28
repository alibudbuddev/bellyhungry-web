import { Component, OnInit } from '@angular/core';
import { OrderService } from '@shared/service/order.service';

@Component({
  selector: 'app-merchant-orders',
  templateUrl: './merchant-orders.component.html',
  styleUrls: ['./merchant-orders.component.less'],
  providers: [OrderService]
})
export class MerchantOrdersComponent implements OnInit {

  constructor(
  	private orderService: OrderService,
 	) {
 	}

  ngOnInit() {
  	this.orderService.merchantOrders()
  		.subscribe(res => {
  			console.log(res);
  		});
  }

}
