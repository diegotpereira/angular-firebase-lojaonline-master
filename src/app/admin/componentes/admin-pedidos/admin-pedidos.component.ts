import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent {

	pedidos$;

  constructor(
	  pedidoService: PedidoService
  ) {
	  this.pedidos$ = pedidoService.getPedidos().snapshotChanges().pipe(map(
		  changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {}})))
	  )
  }

  ngOnInit(): void {
  }

}
