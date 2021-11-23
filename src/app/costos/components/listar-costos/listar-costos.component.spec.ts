import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCostosComponent } from './listar-costos.component';

describe('ListarCostosComponent', () => {
  let component: ListarCostosComponent;
  let fixture: ComponentFixture<ListarCostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCostosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
