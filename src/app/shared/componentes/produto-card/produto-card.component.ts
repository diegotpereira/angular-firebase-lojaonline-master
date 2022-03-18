import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent {

	@Input('produto') produto: Produto;
	@Input('show-actions') showActions = true;
  constructor(
	  private _router: Router,
	  private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
