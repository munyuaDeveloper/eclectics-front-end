import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/share/service/toastr.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  registrationForm: FormGroup;
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toaster: ToasterService) { }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
      names: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
  }


  registerUser() {
    // login user

    const user = this.registrationForm.value
    this.authService.registerUser(user).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res['token'])
      this.router.navigate(['/dashboard/home'])
      this.toaster.showSuccess('User register successfully!')
    }, error => {
      console.log(error);

      error.status === 400 ? this.toaster.showError(error['error']) : 'Connection Error'
    })


  }
}

