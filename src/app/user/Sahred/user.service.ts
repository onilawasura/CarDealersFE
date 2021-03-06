import { Injectable, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  $isLoggedIn = new EventEmitter();

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44393/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

 });


 comparePasswords(fb: FormGroup) {
  let confirmPswrdCtrl = fb.get('ConfirmPassword');
  //passwordMismatch
  //confirmPswrdCtrl.errors={passwordMismatch:true}
  if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
    if (fb.get('Password').value != confirmPswrdCtrl.value)
      confirmPswrdCtrl.setErrors({ passwordMismatch: true });
    else
      confirmPswrdCtrl.setErrors(null);
  }
}

register() {
  var body = {
    UserName: this.formModel.value.UserName,
    Email: this.formModel.value.Email,
    FullName: this.formModel.value.FullName,
    Password: this.formModel.value.Passwords.Password
  };
  return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
}

login(formData) {
  return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
}

LoggedIn(){
  this.$isLoggedIn.emit(true);
}

// getUserProfile() {
//   //for lots of enterprises application have to appent the jwt token to request header as below
//   //to avoid repeating codes we can use http intercepto classes
//   // var tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
//   // return this.http.get(this.BaseURI + '/UserProfile', { headers : tokenHeader});

//   //for this api call jwt token is needed and it provided with auth.interceptor.ts class
//   return this.http.get(this.BaseURI + '/UserProfile');
// }

roleMatch(allowedRoles): boolean{
  var isMatch = false;
  var payload = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
  var userRole = payload.role;
  allowedRoles.forEach(element => {
    if(userRole == element){
      isMatch = true;
      return false;
    }
  });

  return isMatch;
}

getUserProfile() {
  //for lots of enterprises application have to appent the jwt token to request header as below
  //to avoid repeating codes we can use http intercepto classes
  //  var tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
  //  return this.http.get(this.BaseURI + '/UserProfile/GetUserProfile', { headers : tokenHeader});

  //for this api call jwt token is needed and it provided with auth.interceptor.ts class
  return this.http.get(this.BaseURI + '/UserProfile/GetUserProfile');
}

}
