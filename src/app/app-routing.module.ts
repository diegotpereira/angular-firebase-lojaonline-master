import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarrinhoComprasComponent } from './loja/componentes/carrinho-compras/carrinho-compras.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
	{
		path: "login", 
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
		path: "carrinho-compras",
		component: CarrinhoComprasComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
