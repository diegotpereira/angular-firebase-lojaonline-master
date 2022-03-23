import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CarrinhoComprasService } from './carrinho-compras.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
	  private db: AngularFireDatabase,
	  private carrinhoService: CarrinhoComprasService) {}

	  async fazerPedido(pedido) {
		  let resultado = await this.db.list('/pedidos').push(pedido);
		  this.carrinhoService.limparCarrinho();

		  return resultado;
	  }
	  getPedidos() {

		return this.db.list('/pedidos');
	  }
	  getPedidosPorUsuario(usuarioId) {

		return this.db.list('/pedidos', ref => ref.orderByChild('usuarioId/').equalTo(usuarioId));
	  }
	  get(pedidoId) {

		return this.db.object('/pedidos/' + pedidoId);
	  }
}
