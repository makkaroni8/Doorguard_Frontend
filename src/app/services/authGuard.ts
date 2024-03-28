import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './authservice';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Zugriff erlaubt
    } else {
      this.router.navigate(['']); // Weiterleitung zur Anmeldeseite
      return false; // Zugriff verweigert
    }
  }
}
