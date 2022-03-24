import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarrinhoCompras } from 'src/app/shared/models/carrinho-compras';
import { Pedido } from 'src/app/shared/models/pedido';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-compras-form',
  templateUrl: './compras-form.component.html',
  styleUrls: ['./compras-form.component.css']
})
export class ComprasFormComponent implements OnInit, OnDestroy {

	@Input('carrinho') carrinho: CarrinhoCompras;
	envio: any = {};
	usuarioSubscription: Subscription;
	usuarioID: string;

  constructor(
	  private router: Router,
	  private authService: AuthService,
	  private pedidoService: PedidoService
  ) { }

  ngOnInit(){
	  this.usuarioSubscription = this.authService.user$.subscribe(usuario => this.usuarioID = usuario.uid);
  }
  ngOnDestroy() {
	  this.usuarioSubscription.unsubscribe();
  }
  async fazerPedido() {
	  const pedido = new Pedido(this.usuarioID, this.envio, this.carrinho);
	  const resultado = await this.pedidoService.fazerPedido(pedido);

	  this.router.navigate(['/pedido-sucesso', resultado.key])
  }
}
