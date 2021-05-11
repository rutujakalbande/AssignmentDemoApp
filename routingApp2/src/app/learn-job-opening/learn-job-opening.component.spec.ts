import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnJobOpeningComponent } from './learn-job-opening.component';

describe('LearnJobOpeningComponent', () => {
  let component: LearnJobOpeningComponent;
  let fixture: ComponentFixture<LearnJobOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnJobOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnJobOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
