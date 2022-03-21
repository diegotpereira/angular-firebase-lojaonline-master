import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { CarrinhoCompras } from '../models/carrinho-compras';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {

  constructor(
	  private db: AngularFireDatabase
  ) { }

  async getCarrinho(): Promise<Observable<CarrinhoCompras>> {
	  const carrinhoId = await this.getOuCriarCarrinhoId();
	  return this.db.object('/carrinho-compras/' + carrinhoId).snapshotChanges().pipe(map(
		  x => {
			  let val: any = x.payload.val();
			  const key: string = x.payload.key;
			  val = val ? val.items : null;

			  return new CarrinhoCompras(key, val);
		  }
	  ));
  }
  addNoCarrinhoService(produto: Produto) {
	  this.atualizarCarrinho(produto, 1);
  }
  removerDoCarrinho(produto: Produto) {
	  this.atualizarCarrinho(produto, 1);
  }

  async limparCarrinho() {
	const carrinhoId = await this.getOuCriarCarrinhoId();
	this.db.object('/carrinho-compras/' + carrinhoId + '/items').remove();
  }
 
  private criar() {
	  return this.db.list('/carrinho-compras').push({
		dataCriada: new Date().getTime()
	  })
  }
  private getItem(carrinhoId: string, produtoId: string) {
	  return this.db.object('/carrinho-compras' + carrinhoId + '/items/' + produtoId);
  }

  private async getOuCriarCarrinhoId() {
	let carrinhoId = localStorage.getItem('carrinhoId');
	if(carrinhoId) return carrinhoId;

	let resultado = await this.criar();
	localStorage.setItem('carrinhoId', resultado.key);

	return resultado.key;
}

  private async atualizarCarrinho(produto: Produto, mudar: Number) {
	  let carrinhoId = await this.getOuCriarCarrinhoId();
	  let item$ = this.getItem(carrinhoId, produto.key)

	  item$.snapshotChanges().pipe(take(1)).subscribe(item => {
		  const val: any = item.payload.val()
		  const quantidade = ((val ? val.quantidade : 0) || 0) + mudar;
		  if(quantidade === 0) item$.remove();
		  else item$.update({ produto: produto, quantidade: quantidade });
	  })
  }
}	
