import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(
		private auth: AuthService,
		private _router: Router
	) {}

	canActivate(route, state: RouterStateSnapshot) {
		return this.auth.user$.pipe(map(
			user => {
				if(user) return true;

				this._router.navigate(['/login'], { queryParams: { retornoUrl: state.url }});

				return false;
			}
		))
	}
}