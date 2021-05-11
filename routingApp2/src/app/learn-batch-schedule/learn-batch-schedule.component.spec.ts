import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBatchScheduleComponent } from './learn-batch-schedule.component';

describe('LearnBatchScheduleComponent', () => {
  let component: LearnBatchScheduleComponent;
  let fixture: ComponentFixture<LearnBatchScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnBatchScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnBatchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
