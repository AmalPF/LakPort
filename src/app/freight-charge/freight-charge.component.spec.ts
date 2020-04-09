import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightChargeComponent } from './freight-charge.component';

describe('FreightChargeComponent', () => {
  let component: FreightChargeComponent;
  let fixture: ComponentFixture<FreightChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
