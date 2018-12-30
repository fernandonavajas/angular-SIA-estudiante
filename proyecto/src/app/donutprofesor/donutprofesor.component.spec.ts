import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutprofesorComponent } from './donutprofesor.component';

describe('DonutprofesorComponent', () => {
  let component: DonutprofesorComponent;
  let fixture: ComponentFixture<DonutprofesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutprofesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
