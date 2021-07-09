import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { OutletComponent } from './outlet/outlet.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { MyLoansComponent } from './my-loans/my-loans.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanService } from './services/loan.service';
import { PayLoanComponent } from './pay-loan/pay-loan.component';
import { LoanLimitComponent } from './loan-limit/loan-limit.component';


@NgModule({
  declarations: [
    HomeComponent,
    OutletComponent,
    ApplyLoanComponent,
    MyLoansComponent,
    PayLoanComponent,
    LoanLimitComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoanService
  ]
})
export class DashboardModule { }
