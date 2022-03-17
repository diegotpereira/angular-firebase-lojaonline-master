import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app'
import { AppUsuario } from '../models/app-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private _db: AngularFireDatabase) {}

  salvar(user: firebase.User) {
	this._db.object('/usuarios/' + user.uid).update({
		nome: user.displayName,
		email: user.email 
	})
}
get(uid: string): AngularFireObject<AppUsuario> {
	return this._db.object('/usuarios' + uid)
 }
}
