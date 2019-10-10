import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBrandingComponentComponent } from './pricing-branding-component.component';

describe('PricingBrandingComponentComponent', () => {
  let component: PricingBrandingComponentComponent;
  let fixture: ComponentFixture<PricingBrandingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingBrandingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingBrandingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
