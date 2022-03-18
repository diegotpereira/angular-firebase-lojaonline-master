import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-produto-filter',
  templateUrl: './produto-filter.component.html',
  styleUrls: ['./produto-filter.component.css']
})
export class ProdutoFilterComponent implements OnInit {

	categorias$;
	@Input() categoria: string;
	@Output() pesquisaResposta = new EventEmitter<any>();

  constructor(
	  private categoriaService: CategoriaService
  ) {
	  this.getCategorias();
  }

  getCategorias() {
	  this.categorias$ = this.categoriaService.getTodos().snapshotChanges().pipe(map(
		  changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
	  ));
  }
  ngOnInit(): void {
  }
  PesquisarProdutos(produtoChave) {
	  this.pesquisaResposta.emit(produtoChave)
  }
}
