import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
//import { User, auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { UsuarioService } from './usuario.service';
import { AppUsuario } from '../models/app-usuario';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user$: Observable<firebase.User>;

  constructor(
	  private _afAuth: AngularFireAuth,
	  private _route: ActivatedRoute,
	  private _user: UsuarioService) { 
		this.user$ = _afAuth.authState
	  }

	  entrar() {
		  const retornoUrl = this._route.snapshot.queryParamMap.get('retornoUrl') || '/';
		  sessionStorage.setItem('retornoUrl', retornoUrl);

		  const fornecedor = new firebase.auth.GoogleAuthProvider();
		  this._afAuth.auth.signInWithPopup(fornecedor);
	  }
	  sair() {
		  this._afAuth.auth.signOut();
	  }
	  get AppUsuario$(): Observable<AppUsuario> {
		return this.user$.pipe(
		  switchMap(user => {
			if (user) return this._user.get(user.uid).valueChanges();
			return of(null)
		  }));
	  }
}
