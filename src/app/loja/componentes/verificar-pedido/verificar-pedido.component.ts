import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhoCompras } from 'src/app/shared/models/carrinho-compras';
import { CarrinhoComprasService } from 'src/app/shared/services/carrinho-compras.service';

@Component({
  selector: 'app-verificar-pedido',
  templateUrl: './verificar-pedido.component.html',
  styleUrls: ['./verificar-pedido.component.css']
})
export class VerificarPedidoComponent implements OnInit {

	carrinho$: Observable<CarrinhoCompras>;

  constructor(
	  private carrinhoService: CarrinhoComprasService
  ) { }

  async ngOnInit() {
	  this.carrinho$ = await this.carrinhoService.getCarrinho();
  }

}
