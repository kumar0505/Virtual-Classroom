import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCrtl: ['', Validators.required],
      contactCrtl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      instNameCrtl: ['', Validators.required],
      addressCrtl: ['', Validators.required],
      cityCrtl: ['', Validators.required],
      districtCrtl: ['', Validators.required],
      stateCrtl: ['', Validators.required],
      pincodeCrtl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required],
      confirmCtrl: ['', Validators.required],
    });
  }

  submit() {
    let user = {
      firstName: this.firstFormGroup.value.firstNameCtrl,
      lastName: this.firstFormGroup.value.lastNameCtrl,
      email: this.firstFormGroup.value.emailCrtl,
      contact: this.firstFormGroup.value.contactCrtl,
      password: this.thirdFormGroup.value.passwordCtrl,
    }

    let inst = {
      instName: this.secondFormGroup.value.instNameCrtl,
      address: this.secondFormGroup.value.addressCrtl,
      city: this.secondFormGroup.value.cityCrtl,
      district: this.secondFormGroup.value.districtCrtl,
      state: this.secondFormGroup.value.stateCrtl,
      pincode: this.secondFormGroup.value.pincodeCrtl,
    }

    this._auth.registerInstitute(user, inst).subscribe(data => {
      window.location.href = '/auth/signin'
    })
  }
}
