import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppNavbarComponent } from './navbar/app-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoFilterComponent } from './produtos/produto-filter/produto-filter.component';
import { SharedModule } from './shared/shared.module';
import { CarrinhoComprasComponent } from './loja/componentes/carrinho-compras/carrinho-compras.component';
import { ProdutoFormComponent } from './admin/componentes/produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminProdutosComponent } from './admin/componentes/admin-produtos/admin-produtos.component';
import { AdminPedidosComponent } from './admin/componentes/admin-pedidos/admin-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppNavbarComponent,
    ProdutosComponent,
    ProdutoFilterComponent,
    CarrinhoComprasComponent,
    ProdutoFormComponent,
    AdminProdutosComponent,
    AdminPedidosComponent
    
  ],
  imports: [
	BrowserAnimationsModule,
    BrowserModule,
	FormsModule,
	CustomFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule,
	SharedModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule,
	AngularFireAuthModule,
	NgbModule.forRoot(),
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
