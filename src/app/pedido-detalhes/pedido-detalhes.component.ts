import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../shared/models/pedido';
import { PedidoService } from '../shared/services/pedido.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pedido-detalhes',
  templateUrl: './pedido-detalhes.component.html',
  styleUrls: ['./pedido-detalhes.component.css']
})
export class PedidoDetalhesComponent implements OnInit {

	pedidoId: string;
	pedidoInfo: Pedido;

  constructor(
	  private route: ActivatedRoute,
	  private pedidoService: PedidoService
  ) { }

  ngOnInit(){
	  this.pedidoId = this.route.snapshot.paramMap.get('id');

	  if(this.pedidoId)
	  this.pedidoService.get(this.pedidoId).valueChanges()
	  .pipe(take(1))
	  .subscribe((pedido: any) => this.pedidoInfo = pedido);
  }

}
