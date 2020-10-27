import { Component, OnInit } from '@angular/core';
import { User } from '@shared/class/user.class';
import { AuthService } from '@core/service/auth.service';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService, private cartService: CartService) { }

  ngOnInit() {}
}
