import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = environment.API_URL

  private loginUrl = this.API_URL + 'login'

  private registrationUrl = this.API_URL + 'register'

  constructor(private httpClient: HttpClient) { }


  userLogin(user) {
    return this.httpClient.post(this.loginUrl, user)
  }
  registerUser(user) {
    return this.httpClient.post(this.registrationUrl, user)
  }

  IsUserLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
}
