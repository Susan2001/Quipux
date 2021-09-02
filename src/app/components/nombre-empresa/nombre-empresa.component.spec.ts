import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreEmpresaComponent } from './nombre-empresa.component';

describe('NombreEmpresaComponent', () => {
  let component: NombreEmpresaComponent;
  let fixture: ComponentFixture<NombreEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
