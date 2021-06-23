import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static isUserAuthenticated = new BehaviorSubject<boolean>(false);
  private static currentUserObs = new BehaviorSubject<any>({});
  private static isAdminObs = new BehaviorSubject<boolean>(false);


  public get getCurrentUser() {
    return AuthService.currentUserObs.asObservable();
  }


  get isAuthenticated() {
    return AuthService.isUserAuthenticated.asObservable();
  }

  get isAdmin() {
    return AuthService.isAdminObs.asObservable();
  }

  constructor(private _http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      AuthService.isUserAuthenticated.next(true);
      const usr = JSON.parse(localStorage.getItem('user'));
      AuthService.currentUserObs.next(usr);
      if (usr.role === 'admins') {
        AuthService.isAdminObs.next(true);
      } else {
        AuthService.isAdminObs.next(false);
      }
    }
    else {
      AuthService.isUserAuthenticated.next(false);
      AuthService.isAdminObs.next(false);
      AuthService.currentUserObs.next({});
    }
  }

  registerInstitute(user: any, inst: any): Observable<any> {
    return this._http.post('/api/institute/registerInstitute', { user: user, inst: inst });
  }

  signIn(userCredential: any): Observable<any> {
    return this._http.post('/api/user/signin', userCredential);
  }

  setUserCredential(credentials: any) {
    AuthService.isUserAuthenticated.next(true);
    AuthService.currentUserObs.next(credentials.user);
    if (credentials.user.role === 'admins') {
      AuthService.isAdminObs.next(true);
    } else {
      AuthService.isAdminObs.next(false);
    }
    localStorage.setItem('user', JSON.stringify(credentials.user));
    localStorage.setItem('token', credentials.token);
  }

  async verifyCredentials() {
    // to verify token from backened.
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    AuthService.isUserAuthenticated.next(false);
    AuthService.currentUserObs.next({});
    AuthService.isAdminObs.next(false);
  }

}
