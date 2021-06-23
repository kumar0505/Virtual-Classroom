import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // console.log(this._auth.isAuthenticated);
    // console.log(state.url);
    return this._auth.isAuthenticated
      .pipe(
        take(1),
        map((isAuthenticated: boolean) => {
          if (isAuthenticated) {
            if (state.url === '/auth/signin' || state.url === '/auth/signup') {
              this._router.navigate(['classroom']);
              return false;
            }
            return true;
          }

          else if (state.url === '/auth/signin' || state.url === '/auth/signup') {
            return true;
          }

          this._router.navigate(['auth']);
          return false;
        })
      )
  }
}
