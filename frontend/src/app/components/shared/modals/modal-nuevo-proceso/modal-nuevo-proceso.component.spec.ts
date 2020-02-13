import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoProcesoComponent } from './modal-nuevo-proceso.component';

describe('ModalNuevoProcesoComponent', () => {
  let component: ModalNuevoProcesoComponent;
  let fixture: ComponentFixture<ModalNuevoProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
