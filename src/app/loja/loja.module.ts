import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ComprasFormComponent } from './componentes/compras-form/compras-form.component';
import { CarrinhoComprasComponent } from './componentes/carrinho-compras/carrinho-compras.component';
import { MeuPedidosComponent } from './componentes/meu-pedidos/meu-pedidos.component';
import { VerificarPedidoComponent } from './componentes/verificar-pedido/verificar-pedido.component';
import { VerificarResumoComponent } from './componentes/verificar-resumo/verificar-resumo.component';



@NgModule({
  declarations: [
	VerificarPedidoComponent,
	VerificarResumoComponent,
	ComprasFormComponent,
	CarrinhoComprasComponent,
	MeuPedidosComponent,
	ComprasFormComponent,
  ],
  imports: [
    CommonModule,
	RouterModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class LojaModule { }
