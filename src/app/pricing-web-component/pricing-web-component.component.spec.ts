import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingWebComponentComponent } from './pricing-web-component.component';

describe('PricingWebComponentComponent', () => {
  let component: PricingWebComponentComponent;
  let fixture: ComponentFixture<PricingWebComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingWebComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
