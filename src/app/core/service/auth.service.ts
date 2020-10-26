import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private endpoint = `${environment.apiUrl}/auth`;
	public user: undefined | object | boolean;
  
  constructor(private httpClient: HttpClient) { }

  me():Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/me`);
  }

  signUp(user: any):Observable<any> {
    let userObj = {user: user};
    return this.httpClient.post<any>(`${this.endpoint}`, userObj);
  }

  signIn(user: any):Observable<any> {
    return this.httpClient.post<any>(`${this.endpoint}/login`, user);
  }

  signOut():Observable<boolean> {
    return this.httpClient.delete<any>(`${this.endpoint}/signout`);
  }

}
