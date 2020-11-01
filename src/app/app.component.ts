import { Component, OnInit } from '@angular/core';
import { User } from '@shared/class/user.class';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  constructor(
  	private authService: AuthService,
  	private router: Router,
  	public cartService: CartService
  ) { }

  ngOnInit() {}

  onLogoutClick(): void {
  	localStorage.removeItem('access_token');
  	this.authService.user = undefined;
  	this.router.navigate(['/products']);
  }
}
