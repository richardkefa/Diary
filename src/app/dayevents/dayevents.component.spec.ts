import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayeventsComponent } from './dayevents.component';

describe('DayeventsComponent', () => {
  let component: DayeventsComponent;
  let fixture: ComponentFixture<DayeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
