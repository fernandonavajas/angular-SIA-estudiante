import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamospComponent } from './ramosp.component';

describe('RamospComponent', () => {
  let component: RamospComponent;
  let fixture: ComponentFixture<RamospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
