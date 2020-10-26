import { Component, OnInit } from '@angular/core';
import FeedService from '@shared/service/feed.service';
import { trackById } from '@shared/util/helpers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  providers: [FeedService]
})
export class ProductListComponent implements OnInit {
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
