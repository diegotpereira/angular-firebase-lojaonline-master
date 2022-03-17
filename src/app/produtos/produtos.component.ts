import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
