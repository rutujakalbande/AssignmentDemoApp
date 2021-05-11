import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBatchComponent } from './upcoming-batch.component';

describe('UpcomingBatchComponent', () => {
  let component: UpcomingBatchComponent;
  let fixture: ComponentFixture<UpcomingBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
