import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPedidosComponent } from './meu-pedidos.component';

describe('MeuPedidosComponent', () => {
  let component: MeuPedidosComponent;
  let fixture: ComponentFixture<MeuPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
