import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIntrestedEnquiryComponent } from './contact-intrested-enquiry.component';

describe('ContactIntrestedEnquiryComponent', () => {
  let component: ContactIntrestedEnquiryComponent;
  let fixture: ComponentFixture<ContactIntrestedEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactIntrestedEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIntrestedEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
