import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbusComponent } from './redbus.component';

describe('RedbusComponent', () => {
  let component: RedbusComponent;
  let fixture: ComponentFixture<RedbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
