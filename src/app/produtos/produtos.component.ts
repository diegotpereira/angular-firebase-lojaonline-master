import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from '../shared/models/produto';
import { ProdutoService } from '../shared/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtos: Produto[] = [];
	produtosFiltrados: Produto[] = [];
	subscribe: Subscription;
	categoria: string; 
	cart: any; 
	subscription: Subscription;
	chaveDePesquisa;

  constructor(
	  private route: ActivatedRoute,
	  private produtoService: ProdutoService
  ) {
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
  }
  getResponse(event) {
	  this.chaveDePesquisa = event;
  }
}
