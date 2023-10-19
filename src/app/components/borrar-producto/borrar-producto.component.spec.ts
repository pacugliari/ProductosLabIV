import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarProductoComponent } from './borrar-producto.component';

describe('BorrarProductoComponent', () => {
  let component: BorrarProductoComponent;
  let fixture: ComponentFixture<BorrarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarProductoComponent]
    });
    fixture = TestBed.createComponent(BorrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
