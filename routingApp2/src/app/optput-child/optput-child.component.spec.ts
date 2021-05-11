import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptputChildComponent } from './optput-child.component';

describe('OptputChildComponent', () => {
  let component: OptputChildComponent;
  let fixture: ComponentFixture<OptputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
