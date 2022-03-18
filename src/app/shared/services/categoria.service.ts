import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
	  private db: AngularFireDatabase
  ) { }

  getTodos() {
	  return this.db.list('/categorias')
  }
}
