import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@core/service/auth.service';
import ShoppingCart from '@shared/class/shopping-cart';
import CartService from '@shared/service/cart.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitializer {
  // private apiUrl: string = 'https://food-trade-api.herokuapp.com';
  private apiUrl: string = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private cartService: CartService
  ) {
    cartService.init();
  }

  init(): () => Promise<boolean> {
    return () => {
      return new Promise<boolean>((resolve, reject) => {
        this.checUserIfAuthenticated(() => {
          resolve();
        });
      });
    };
  }

  private checUserIfAuthenticated(callback: () => void) {
    this.httpClient.get<any>(`${this.apiUrl}/auth/jwt/me`)  
      .subscribe(
        response => {
          this.authService.user = response.user;
          callback();
        },
        error => {
          this.authService.user = false;
          callback();
        }
      );
  }
}
