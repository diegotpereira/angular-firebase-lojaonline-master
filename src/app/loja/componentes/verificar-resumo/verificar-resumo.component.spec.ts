import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarResumoComponent } from './verificar-resumo.component';

describe('VerificarResumoComponent', () => {
  let component: VerificarResumoComponent;
  let fixture: ComponentFixture<VerificarResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarResumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
