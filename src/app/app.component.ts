import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	ngOnInit(): void {
		this.removePageLoadMask();
	}

	removePageLoadMask(): void {
    const el = document.getElementById('page-loader');
    el.style.opacity = '0';
  }
}
