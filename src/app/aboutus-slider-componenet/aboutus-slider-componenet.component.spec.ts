import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusSliderComponenetComponent } from './aboutus-slider-componenet.component';

describe('AboutusSliderComponenetComponent', () => {
  let component: AboutusSliderComponenetComponent;
  let fixture: ComponentFixture<AboutusSliderComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusSliderComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusSliderComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
