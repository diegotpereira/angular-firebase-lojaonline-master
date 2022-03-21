import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { AuthService } from '../../services/auth.service';
import { AppUsuario } from '../../models/app-usuario';
import { CarrinhoComprasService } from '../../services/carrinho-compras.service';
import { CarrinhoCompras } from '../../models/carrinho-compras';


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
	
  constructor(
	  private _router: Router,
	  private auth: AuthService,
	  private carrinhoService: CarrinhoComprasService
  ) {
	  this.auth.AppUsuario$.subscribe(appUsuario => this.appUsuario = appUsuario)
	  console.log(this.appUsuario);
	  
  }
  addNoCarrinho() {
	  this.carrinhoService.addNoCarrinhoService(this.produto);
	  console.log(this.carrinhoService);
	  
  }

  ngOnInit(): void {
  }

}
