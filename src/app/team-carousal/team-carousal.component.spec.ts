import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCarousalComponent } from './team-carousal.component';

describe('TeamCarousalComponent', () => {
  let component: TeamCarousalComponent;
  let fixture: ComponentFixture<TeamCarousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCarousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
