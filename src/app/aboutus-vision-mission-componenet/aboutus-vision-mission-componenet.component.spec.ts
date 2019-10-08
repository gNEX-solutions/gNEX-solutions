import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusVisionMissionComponenetComponent } from './aboutus-vision-mission-componenet.component';

describe('AboutusVisionMissionComponenetComponent', () => {
  let component: AboutusVisionMissionComponenetComponent;
  let fixture: ComponentFixture<AboutusVisionMissionComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusVisionMissionComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusVisionMissionComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
