import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPedidoComponent } from './verificar-pedido.component';

describe('VerificarPedidoComponent', () => {
  let component: VerificarPedidoComponent;
  let fixture: ComponentFixture<VerificarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
