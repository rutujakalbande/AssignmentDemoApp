import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestedEnquiryChildComponent } from './intrested-enquiry-child.component';

describe('IntrestedEnquiryChildComponent', () => {
  let component: IntrestedEnquiryChildComponent;
  let fixture: ComponentFixture<IntrestedEnquiryChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestedEnquiryChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestedEnquiryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
