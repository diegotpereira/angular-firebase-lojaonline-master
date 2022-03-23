import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPedidosComponent } from './admin/componentes/admin-pedidos/admin-pedidos.component';
import { AdminProdutosComponent } from './admin/componentes/admin-produtos/admin-produtos.component';
import { ProdutoFormComponent } from './admin/componentes/produto-form/produto-form.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComprasComponent } from './loja/componentes/carrinho-compras/carrinho-compras.component';
import { MeuPedidosComponent } from './loja/componentes/meu-pedidos/meu-pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
	{
		path: "entrar", 
		component: LoginComponent
	},
	{
		path: "",
		component: ProdutosComponent
	},
	{
		path: "produtos",
		component: ProdutosComponent
	},
	{
		path: "meus/pedidos",
		component: MeuPedidosComponent
	},
	{
		path: "admin/produtos/novo",
		component: ProdutoFormComponent
	},
	{
		path: "admin/produtos/:id",
		component: ProdutoFormComponent
	},
	{
		path: "carrinho-compras",
		component: CarrinhoComprasComponent
	},
	{
		path: "admin/produtos",
		component: AdminProdutosComponent
	},
	{
		path: "admin/pedidos",
		component: AdminPedidosComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
