import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoCompras } from '../../models/carrinho-compras';
import { Produto } from '../../models/produto';
import { CarrinhoComprasService } from '../../services/carrinho-compras.service';

@Component({
  selector: 'app-produto-quantidade',
  templateUrl: './produto-quantidade.component.html',
  styleUrls: ['./produto-quantidade.component.css']
})
export class ProdutoQuantidadeComponent{

	@Input('produto') produto: Produto;
	@Input('carrinho-compras') carrinhoCompras: CarrinhoCompras;


  constructor(
	  private carrinhoService: CarrinhoComprasService
  ) { }

  addNoCarrinho() {
	  this.carrinhoService.addNoCarrinhoService(this.produto);
  }
  removerDoCarrinho(){
	  this.carrinhoService.removerDoCarrinho(this.produto);
  }
  ngOnInit(): void {
  }

}
