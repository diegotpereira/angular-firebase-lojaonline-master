import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoCompras } from 'src/app/shared/models/carrinho-compras';

@Component({
  selector: 'app-verificar-resumo',
  templateUrl: './verificar-resumo.component.html',
  styleUrls: ['./verificar-resumo.component.css']
})
export class VerificarResumoComponent implements OnInit {

	@Input('carrinho') carrinho: CarrinhoCompras;
  constructor() { }

  ngOnInit(): void {
  }

}
