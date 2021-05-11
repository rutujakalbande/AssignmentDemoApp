import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestedEnquiryComponent } from './intrested-enquiry.component';

describe('IntrestedEnquiryComponent', () => {
  let component: IntrestedEnquiryComponent;
  let fixture: ComponentFixture<IntrestedEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestedEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestedEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
