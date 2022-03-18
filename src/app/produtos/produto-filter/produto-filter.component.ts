import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto-filter',
  templateUrl: './produto-filter.component.html',
  styleUrls: ['./produto-filter.component.css']
})
export class ProdutoFilterComponent implements OnInit {

	categorias$

	@Input() categoria: string;
	@Output() pesquisaResposta = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
