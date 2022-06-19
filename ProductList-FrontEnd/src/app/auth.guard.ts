import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this._auth.loggedIn()) {
      console.log('Failed')
      return true;
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
