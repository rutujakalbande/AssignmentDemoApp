import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCertificationComponent } from './learn-certification.component';

describe('LearnCertificationComponent', () => {
  let component: LearnCertificationComponent;
  let fixture: ComponentFixture<LearnCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
