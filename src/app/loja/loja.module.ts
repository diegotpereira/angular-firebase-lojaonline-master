import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ComprasFormComponent } from './componentes/compras-form/compras-form.component';



@NgModule({
  declarations: [
	ComprasFormComponent
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
