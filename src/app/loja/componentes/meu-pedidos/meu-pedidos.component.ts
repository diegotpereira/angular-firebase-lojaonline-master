import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PedidoService } from '../../../shared/services/pedido.service';

@Component({
  selector: 'app-meu-pedidos',
  templateUrl: './meu-pedidos.component.html',
  styleUrls: ['./meu-pedidos.component.css']
})
export class MeuPedidosComponent{

	pedidos$;
  constructor(
	  pedidoService: PedidoService,
	  authService: AuthService
  ) {
	  this.pedidos$ = authService.user$.pipe(switchMap(user => {

		return pedidoService.getPedidosPorUsuario(user.uid).snapshotChanges()
		.pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {}}))))
	  }))
  }

  ngOnInit(): void {
  }

}
