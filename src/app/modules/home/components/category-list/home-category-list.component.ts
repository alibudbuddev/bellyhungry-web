import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-category-list',
  templateUrl: './home-category-list.component.html',
  styleUrls: ['./home-category-list.component.less']
})
export class HomeCategoryListComponent {
	@Input() title: string;
	@Input() image: string;
}
