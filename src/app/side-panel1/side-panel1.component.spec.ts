import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanel1Component } from './side-panel1.component';

describe('SidePanel1Component', () => {
  let component: SidePanel1Component;
  let fixture: ComponentFixture<SidePanel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePanel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
