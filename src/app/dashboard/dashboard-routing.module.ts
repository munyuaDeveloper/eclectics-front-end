import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { HomeComponent } from './home/home.component';
import { LoanLimitComponent } from './loan-limit/loan-limit.component';
import { MyLoansComponent } from './my-loans/my-loans.component';
import { OutletComponent } from './outlet/outlet.component';
import { PayLoanComponent } from './pay-loan/pay-loan.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'apply-loan',
        component: ApplyLoanComponent
      },
      {
        path: 'my-loans',
        component: MyLoansComponent
      },
      {
        path: 'pay-loan',
        component: PayLoanComponent
      },
      {
        path: 'loan-limit',
        component: LoanLimitComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class DashboardRoutingModule { }
