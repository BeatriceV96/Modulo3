import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/auth/login']);
        }
      }),
      map(authenticated => authenticated)
    );
  }
}
