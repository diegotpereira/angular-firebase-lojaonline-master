import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

	constructor(
		private auth: AuthService,
		private _router: Router
	) {}

	canActivate(route, state: RouterStateSnapshot) {
		return this.auth.user$.pipe(map(
			user => {
				if(user) return true;

				this._router.navigate(['/entrar'], { queryParams: { retornoUrl: state.url }});

				return false;
			}
		))
	}
}
