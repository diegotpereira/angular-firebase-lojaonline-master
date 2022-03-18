import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { AuthService } from '../../services/auth.service';
import { AppUsuario } from '../../models/app-usuario';


@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent {

	@Input('produto') produto: Produto;
	@Input('show-actions') showActions = true;
	appUsuario: AppUsuario;
  constructor(
	  private _router: Router,
	  private auth: AuthService
  ) {
	  this.auth.AppUsuario$.subscribe(appUsuario => this.appUsuario = appUsuario)
  }

  ngOnInit(): void {
  }

}
