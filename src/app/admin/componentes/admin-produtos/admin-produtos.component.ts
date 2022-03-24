import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-admin-produtos',
  templateUrl: './admin-produtos.component.html',
  styleUrls: ['./admin-produtos.component.css']
})
export class AdminProdutosComponent implements OnInit, OnDestroy {

	@ViewChild(MatSort, {static: false}) sort: MatSort;
	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
	produtos: Produto[];
	ProdutosFiltrados: any[];
	subscribe: Subscription;
	ColunasExibidas: string[] = ['titulo', 'preco', 'edit'];
	dataSource: any;

  constructor(
	  private produtoService: ProdutoService
  ) {
	  this.subscribe = this.produtoService.getTodos().snapshotChanges().pipe(
		  map(changes => changes.map(c => ({ key: c.payload, ...c.payload.val() as {}})) 
		  )).subscribe((produtos:any) => {
			  this.dataSource = new MatTableDataSource<Produto>(produtos);
			  this.dataSource.sort = this.sort;
			  
		  })
  }
  aplicarFiltro(filtarValor: string) {
	  this.dataSource.filter = filtarValor.trim().toLowerCase()
  }
	ngOnDestroy(){
		this.subscribe.unsubscribe();
	}

  ngOnInit(): void {
  }

}
