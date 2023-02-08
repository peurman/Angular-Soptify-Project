import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthToken } from '../login/models/authtoken.interface';
import { AuthService } from '../login/services/auth.service';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  canActivate() {
    const tokenInfo = localStorage.getItem('tokenInfo');
    if (tokenInfo) {
      const tokenAuth = JSON.parse(tokenInfo) as AuthToken;
      console.log(tokenAuth.access_token);
      return this.auth.VerifyToken(tokenAuth.access_token).pipe(
        map(() => {
          return true;
        }),
        catchError(() => {
          this.router.navigateByUrl('/login');
          this.auth.LogOut();
          const config = new MatSnackBarConfig();
          config.panelClass = ['success-dialog'];
          config.verticalPosition = 'bottom';
          config.horizontalPosition = 'center';
          this._snackBar.open(
            'Error: You are not registered as a developer ',
            'Ok',
            config
          );
          return of(false);
        })
      );
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
