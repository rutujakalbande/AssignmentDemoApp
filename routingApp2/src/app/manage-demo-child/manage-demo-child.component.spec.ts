import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDemoChildComponent } from './manage-demo-child.component';

describe('ManageDemoChildComponent', () => {
  let component: ManageDemoChildComponent;
  let fixture: ComponentFixture<ManageDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
