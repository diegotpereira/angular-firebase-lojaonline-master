import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPipe } from './pipe/sorting.pipe';
import { MaterialModule } from '../material.module';
import { FilterPipe } from './pipe/filter.pipe';

import { ProdutoCardComponent } from './componentes/produto-card/produto-card.component';
import { ProdutoQuantidadeComponent } from './componentes/produto-quantidade/produto-quantidade.component';


@NgModule({
	declarations: [
		ProdutoCardComponent,
		ProdutoQuantidadeComponent,
		SortingPipe,
		FilterPipe
	],
	exports: [
		ProdutoCardComponent,
		ProdutoQuantidadeComponent,
		SortingPipe,
		FilterPipe
	],
	imports: [
		CommonModule,
		MaterialModule,
		
	]
})
export class SharedModule { }