import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCourcesChildComponent } from './learn-cources-child.component';

describe('LearnCourcesChildComponent', () => {
  let component: LearnCourcesChildComponent;
  let fixture: ComponentFixture<LearnCourcesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnCourcesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCourcesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
