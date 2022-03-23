import { CarrinhoCompras } from "./carrinho-compras";

export class Pedido {
	dataPedido: number;
	items: any[];

	constructor(
		private usuarioId: string,
		public envio: any,
		carrinhoCompras: CarrinhoCompras
	) {
		this.dataPedido = new Date().getTime();
		this.items = carrinhoCompras.items.map(i => {

			return {
				produto: {
					titulo: i.produto.titulo,
					imagemUrl: i.produto.imagemUrl,
					preco: i.produto.preco
				},
				quantidade: i.quantidade,
				totalPreco: i.totalPreco
			}
		})
	}
}