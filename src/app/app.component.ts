import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from './shared/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
		private _auth: AuthService,
		private _router: Router,
		private _usuarioService: UsuarioService
	) {
		_auth.user$.subscribe(user => {
			if(user) {
				if (!user) return 

				this._usuarioService.salvar(user)

				const retornoUrl = sessionStorage.getItem('retornoUrl')

				if(!retornoUrl) return 

				sessionStorage.removeItem('retornoUrl')
				this._router.navigateByUrl(retornoUrl)
			}
		})
	}
}
