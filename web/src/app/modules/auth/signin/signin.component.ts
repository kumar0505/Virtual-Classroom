import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hidePassword: boolean = true;

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)])
  })

  getEmailErrorMessage() {
    if (this.signInForm.controls.email.hasError('required')) {
      return 'Email is required';
    }

    return this.signInForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.signInForm.controls.password.hasError('required')) {
      return 'Password is required';
    }

    if (this.signInForm.controls.password.hasError('minlength')) {
      return 'Password should have minimum 5 length';
    }

    return this.signInForm.controls.password.hasError('maxlength') ? 'Password length can not exceed 25' : '';
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    let userCredential = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }

    this._auth.signIn(userCredential).subscribe(data => {
      this._auth.setUserCredential(data.response);
      this._router.navigate(['classroom']);
    })
  }

}
