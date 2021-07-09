import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/share/service/toastr.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toaster: ToasterService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  userLogin() {
    // login user
    const user = this.loginForm.value
    this.authService.userLogin(user).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res['token'])
      this.router.navigate(['/dashboard/home/'])
      this.toaster.showSuccess('Login Successful!')
    }, error => {
      error.status === 400 ? this.toaster.showError(error['error']) : 'Connection Error'
    })


  }
}
