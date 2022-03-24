import { Produto } from "./produto";

export class CarrinhoComprasItem {
	constructor(
		public produto: Produto, 
		public quantidade : number) {}

		get totalPreco() {
			return this.produto.preco * this.quantidade;
		}
}