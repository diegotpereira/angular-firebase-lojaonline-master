import { CarrinhoComprasItem } from "./carrinho-compras-item";
import { Produto } from "./produto";

export class CarrinhoCompras {
	items: CarrinhoComprasItem[] = [];

	constructor(public key: string, public itemsMap: { [produtoId: string]: CarrinhoComprasItem}) {
		this.itemsMap = itemsMap || {}

		for(let produtoId in itemsMap) {
			const item = itemsMap[produtoId];
			this.items.push(new CarrinhoComprasItem(item.produto, item.quantidade));
		}
	}
	getQuantidade = (produto: Produto) => {
		let item = this.itemsMap[produto.key];
		return item ? item.quantidade : 0;
	}
	get ContagemTotal() {
		let soma = 0;

		for(let produtoId in this.items) {
			soma += this.items[produtoId].totalPreco;
		}
		return soma;
	}
	get contagemTotalItens() {
		let contar = 0;
		for(let produtoId in this.itemsMap) {
			contar += this.itemsMap[produtoId].quantidade;

			return contar;
		}
	}
}