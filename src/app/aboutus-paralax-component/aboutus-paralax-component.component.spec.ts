import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusParalaxComponentComponent } from './aboutus-paralax-component.component';

describe('AboutusParalaxComponentComponent', () => {
  let component: AboutusParalaxComponentComponent;
  let fixture: ComponentFixture<AboutusParalaxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusParalaxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusParalaxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
