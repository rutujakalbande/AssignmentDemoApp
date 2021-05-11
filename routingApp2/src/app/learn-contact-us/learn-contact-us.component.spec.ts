import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnContactUsComponent } from './learn-contact-us.component';

describe('LearnContactUsComponent', () => {
  let component: LearnContactUsComponent;
  let fixture: ComponentFixture<LearnContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
