import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authenticateService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to login page or any other route
      this.router.navigate(['/login']);
      return false;
    }
  }
}
