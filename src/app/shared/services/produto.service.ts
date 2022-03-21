import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
	  private db: AngularFireDatabase
  ) { }

  criar(produto){
	  this.db.list('/produtos').push(produto)
  }
  getTodos() {
	  return this.db.list('/produtos')
  }
  get(produtoID) {
	  return this.db.object('/produtos/' + produtoID)
  }
  atualizar(produtoID, produto) {
	  return this.db.object('/produtos/' + produtoID).update(produto)
  }
  remover(produtoID) {
	  return this.db.object('/produtos/' + produtoID).remove()
  }
}
