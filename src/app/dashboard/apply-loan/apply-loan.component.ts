import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/share/service/toastr.service';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  loanApplicationForm: FormGroup;
  constructor(
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toaster: ToasterService) { }

  ngOnInit(): void {

    this.loanApplicationForm = this.formBuilder.group({
      loan_type: ['', Validators.required],
      amount: ['', Validators.required],
      payment_period: ['', Validators.required],
    })
  }


  applyForLoan() {
    const loanDetails = this.loanApplicationForm.value
    this.loanService.applyLoan(loanDetails).subscribe(res => {
      console.log(res);
      this.toaster.showSuccess('Loan applied successfully!')
      this.router.navigate['/dashboard/home']
      this.loanApplicationForm.reset()
    }, error => {
      console.log(error);
      error.status === 400 ? this.toaster.showError(error['error']) : 'Connection Error'
    })
  }
}
