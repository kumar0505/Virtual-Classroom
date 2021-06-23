import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Observable<boolean>;
  isAdmin: Observable<boolean>;
  user: Observable<any>;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this._auth.isAuthenticated;
    this.isAdmin = this._auth.isAdmin;
    this.user = this._auth.getCurrentUser;
  }

  logout() {
    this._auth.logout();
    this._router.navigate(['auth']);
  }

  onSettingClick() {
    this._router.navigate(['setting'])
  }

}
