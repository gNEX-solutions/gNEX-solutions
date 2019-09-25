import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarousalComponentComponent } from './home-carousal-component.component';

describe('HomeCarousalComponentComponent', () => {
  let component: HomeCarousalComponentComponent;
  let fixture: ComponentFixture<HomeCarousalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarousalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarousalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
