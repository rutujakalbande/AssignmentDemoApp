import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAdminComponent } from './learn-admin.component';

describe('LearnAdminComponent', () => {
  let component: LearnAdminComponent;
  let fixture: ComponentFixture<LearnAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
