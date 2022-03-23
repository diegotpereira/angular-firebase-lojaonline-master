import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

	categorias$;
	produto: any = {};
	id;

  constructor(
	  private router: Router,
	  private acRoute: ActivatedRoute,
	  private categoriaService: CategoriaService,
	  private produtoService: ProdutoService) {
		  this.categorias$ = categoriaService.getTodos().snapshotChanges().pipe(
			  map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {}})))
		  )
		  this.id = this.acRoute.snapshot.paramMap.get('id');

		  if (this.id) {
			  ;this.produtoService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.produto = p)
		  }
	  }
	  salvar(produto) {
		  if(this.id) this.produtoService.atualizar(this.id, produto);
		  else this.produtoService.criar(produto);

		  this.router.navigate(['/admin/produtos'])
	  }
	  remover() {
		  if(!confirm('Tem certeza de que deseja excluir este produto?')) return;

		  this.produtoService.remover(this.id);
		  this.router.navigate(['/admin/produtos'])
	  }

  ngOnInit(): void {
  }

}
