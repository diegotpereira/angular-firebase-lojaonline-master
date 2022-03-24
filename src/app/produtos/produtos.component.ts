import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from '../shared/models/produto';
import { ProdutoService } from '../shared/services/produto.service';
import { CarrinhoComprasService } from '../shared/services/carrinho-compras.service';
import { CarrinhoCompras } from '../shared/models/carrinho-compras';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit, OnDestroy {

	produtos: Produto[] = [];
	produtosFiltrados: Produto[] = [];
	subscribe: Subscription;
	categoria: string; 
	carrinho: any; 
	subscription: Subscription;
	chaveDePesquisa;

  constructor(
	  private route: ActivatedRoute,
	  private produtoService: ProdutoService,
	  private carrinhoService: CarrinhoComprasService) {
	this.getProdutos();
   }
   
   ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
  getProdutos() {
	  this.subscribe = this.produtoService.getTodos().snapshotChanges().pipe(
		map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))	
		  )).pipe(switchMap((produtos: any) => {
			  this.produtos = produtos;

			  return this.route.queryParamMap;
		  })).subscribe(params => {
			  this.categoria = params.get('categoria')

			  this.produtosFiltrados = (this.categoria) ?
			  this.produtos.filter(p => p.categoria === this.categoria) :
			  this.produtos;
			  
		  })
  }

  async ngOnInit() {
	  this.subscribe = (await this.carrinhoService.getCarrinho()).subscribe(carrinho => {
		  this.carrinho = new CarrinhoCompras(carrinho.key, carrinho.itemsMap);
	  })
  }
  getResponse(event) {
	  this.chaveDePesquisa = event;
  }
}
