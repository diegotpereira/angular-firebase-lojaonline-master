import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { AuthService } from '../../services/auth.service';
import { AppUsuario } from '../../models/app-usuario';
import { CarrinhoComprasService } from '../../services/carrinho-compras.service';
import { CarrinhoCompras } from '../../models/carrinho-compras';
import { Observable, Subscription } from 'rxjs';
import { AppItems } from '../../models/app-items';
import { AppShoppingCart } from '../../models/shoppingcart';
@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent {

	@Input('produto') produto: Produto;
	@Input('show-actions') showActions = true;
	@Input('carrinho-compras') carrinhoCompras: CarrinhoCompras;
	appUsuario: AppUsuario;
	subscription: Subscription;
	//items: AppItems;
	//carrinhoId;
	quantidade: number;
	
  constructor(
	private carrinhoService: CarrinhoComprasService,
	  private _router: Router,
	  private auth: AuthService
  ) {
	  this.auth.AppUsuario$.subscribe(appUsuario => this.appUsuario = appUsuario);
	  
  }
  getQuantidade() {
	  if(typeof this.carrinhoCompras === 'undefined' || typeof this.carrinhoCompras === 'undefined') return 0;
	  let item = this.carrinhoCompras.items[this.produto.key];
	  return item ? item.quantidade : 0;
  }
  addNoCarrinho() {
	  this.carrinhoService.addNoCarrinhoService(this.produto);
  }
  editarProduto(produto) {
	  this._router.navigate(['/admin/produtos', produto.key]);
  }
}
