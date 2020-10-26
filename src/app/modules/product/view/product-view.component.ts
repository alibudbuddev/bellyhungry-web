import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import FeedService from '@shared/service/feed.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less'],
  providers: [FeedService]
})
export class ProductViewComponent implements OnInit {
	private productId: string;
	public product: any;

  constructor(private activatedRoute: ActivatedRoute, private feedService: FeedService) {
  	this.productId = activatedRoute.snapshot.params['id'];
  	this.getProduct();
  }

  ngOnInit() {
  	
  }

  getProduct(): void {
  	this.feedService.getProduct(this.productId)
  		.subscribe(product => {
  			this.product = product;
  		});
  }

}
