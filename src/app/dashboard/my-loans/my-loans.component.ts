import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/share/service/toastr.service';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-my-loans',
  templateUrl: './my-loans.component.html',
  styleUrls: ['./my-loans.component.scss']
})
export class MyLoansComponent implements OnInit {

  myLoans = []
  constructor(
    private loanService: LoanService,
    private router: Router,
    private toaster: ToasterService) { }

  ngOnInit(): void {
    this.getMyLoans();
  }


  getMyLoans() {
    this.loanService.getUserLoans().subscribe(res => {
      console.log(res);
      this.myLoans = res['loans']
    }, error => {
      console.log(error);
      error.status === 400 ? this.toaster.showError(error['error']) : 'Connection Error'
    })
  }
}
