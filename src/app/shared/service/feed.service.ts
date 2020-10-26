import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment'

@Injectable()
export default class FeedService {
	private endpoint = `${environment.apiUrl}/feed`;

  constructor(private httpClient: HttpClient) { }

  products():Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/products`);
  }

  getProduct(productId: string):Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/products/${productId}`);
  }
}
