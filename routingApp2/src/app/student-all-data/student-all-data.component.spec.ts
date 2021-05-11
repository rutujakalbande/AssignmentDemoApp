import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllDataComponent } from './student-all-data.component';

describe('StudentAllDataComponent', () => {
  let component: StudentAllDataComponent;
  let fixture: ComponentFixture<StudentAllDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAllDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
