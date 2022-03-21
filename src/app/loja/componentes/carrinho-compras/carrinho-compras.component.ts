import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from 'src/app/shared/services/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  carrinho$;

  constructor(
	  private carrinhoService: CarrinhoComprasService
  ) { }

  async ngOnInit() {
	  this.carrinho$ = await this.carrinhoService.getCarrinho();
  }
  limparCarrinho() {
	  this.carrinhoService.limparCarrinho();
  }
}
