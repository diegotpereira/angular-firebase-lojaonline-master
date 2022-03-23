import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from './componentes/produto-form/produto-form.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminProdutosComponent } from './componentes/admin-produtos/admin-produtos.component';
import { AdminPedidosComponent } from './componentes/admin-pedidos/admin-pedidos.component';



@NgModule({
  declarations: [
	AdminProdutosComponent,
	ProdutoFormComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,
	FormsModule,
    ReactiveFormsModule,
	SharedModule,
	RouterModule.forChild([
		{
			path: "admin/produtos/novo",
			component: ProdutoFormComponent
		},
		{
			path: "admin/produtos/:id",
			component: ProdutoFormComponent
		},
		{
			path: "admin/produtos",
			component: AdminProdutosComponent
		},
		{
			path: "admin/pedidos",
			component: AdminPedidosComponent
		}
	])
  ]
})
export class AdminModule { }
