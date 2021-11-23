import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCostosComponent } from './crear-costos.component';

describe('CrearCostosComponent', () => {
  let component: CrearCostosComponent;
  let fixture: ComponentFixture<CrearCostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCostosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
