import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCourcesComponent } from './learn-cources.component';

describe('LearnCourcesComponent', () => {
  let component: LearnCourcesComponent;
  let fixture: ComponentFixture<LearnCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnCourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
