import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurdService {

  constructor(private _auth: AuthService, private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // console.log(this._auth.isAuthenticated);
    // console.log(state.url);
    return this._auth.isAdmin
      .pipe(
        take(1),
        map((isAdmin: boolean) => {
          if (isAdmin) {
            return true;
          }

          this._router.navigate(['auth']);
          return false;
        })
      )
  }
}
