import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  API_URL = environment.API_URL

  private applyLoanUrl = this.API_URL + 'apply-loan'
  private getMyLoans = this.API_URL + 'get-my-loans'

  constructor(private httpClient: HttpClient) { }


  applyLoan(user) {
    return this.httpClient.post(this.applyLoanUrl, user)
  }

  getUserLoans() {
    return this.httpClient.get(this.getMyLoans)
  }
}
