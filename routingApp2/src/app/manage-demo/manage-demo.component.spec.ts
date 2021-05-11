import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDemoComponent } from './manage-demo.component';

describe('ManageDemoComponent', () => {
  let component: ManageDemoComponent;
  let fixture: ComponentFixture<ManageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
