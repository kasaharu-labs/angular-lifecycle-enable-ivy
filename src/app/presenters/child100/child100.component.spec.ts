import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child100Component } from './child100.component';

describe('Child100Component', () => {
  let component: Child100Component;
  let fixture: ComponentFixture<Child100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
