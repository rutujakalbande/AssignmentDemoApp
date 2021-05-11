import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptputParentComponent } from './optput-parent.component';

describe('OptputParentComponent', () => {
  let component: OptputParentComponent;
  let fixture: ComponentFixture<OptputParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptputParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
