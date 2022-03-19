import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { CarrinhoCompras } from '../models/carrinho-compras';

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
			  const chave: string = x.payload.key;
			  val = val ? val.itens : null;

			  return new CarrinhoCompras(chave, val);
		  }
	  ));
  }
  private async getOuCriarCarrinhoId() {
	  
  }
  async limparCarrinho() {}
}	
