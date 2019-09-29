import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamcardsComponentComponent } from './teamcards-component.component';

describe('TeamcardsComponentComponent', () => {
  let component: TeamcardsComponentComponent;
  let fixture: ComponentFixture<TeamcardsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamcardsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamcardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
