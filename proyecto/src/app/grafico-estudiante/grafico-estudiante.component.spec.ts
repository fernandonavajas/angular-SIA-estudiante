import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEstudianteComponent } from './grafico-estudiante.component';

describe('GraficoEstudianteComponent', () => {
  let component: GraficoEstudianteComponent;
  let fixture: ComponentFixture<GraficoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
