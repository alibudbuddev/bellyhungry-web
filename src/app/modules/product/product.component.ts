import { Component, OnInit } from '@angular/core';
import FeedService from '@shared/service/feed.service';
import { trackById } from '@shared/util/helpers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  providers: [FeedService]
})
export class ProductComponent implements OnInit {
	public trackById = trackById;
	public products: any[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(): void {
  	this.feedService.products()
  		.subscribe(products => {
  			this.products = products;
  		});
  }

}
