import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComprasComponent } from './loja/componentes/carrinho-compras/carrinho-compras.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
	CarrinhoComprasComponent
  ],
  imports: [
    CommonModule,
	RouterModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class CarrinhoModule { }
