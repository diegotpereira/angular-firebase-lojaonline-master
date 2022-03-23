import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
	  private auth: AuthService) { }

  canActivate() {
	return this.auth.AppUsuario$.pipe(map(appUsuario => appUsuario.ehAdmin));
  }
}
