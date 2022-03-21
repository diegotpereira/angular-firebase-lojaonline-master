import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUsuario } from '../shared/models/app-usuario';
import { CarrinhoCompras } from '../shared/models/carrinho-compras';
import { AuthService } from '../shared/services/auth.service';
import { CarrinhoComprasService } from '../shared/services/carrinho-compras.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

	appUsuario: AppUsuario;
	carrinhoComprasContar: number;
	carrinho$: Observable<CarrinhoCompras>
  constructor(
	  private auth: AuthService,
	  private carrinhoService: CarrinhoComprasService
  ) { }

  async ngOnInit(){
	  this.auth.AppUsuario$.subscribe(appUsuario => this.appUsuario = appUsuario)
	  this.carrinho$ = await this.carrinhoService.getCarrinho();

	  
  }
  sair() {
	  this.auth.sair();
  }
}
