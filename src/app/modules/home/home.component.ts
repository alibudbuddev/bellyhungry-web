import { Component, OnInit } from '@angular/core';
import { trackByIndex } from '@shared/util/helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	public trackByIndex = trackByIndex;
	public categories = [1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

}
