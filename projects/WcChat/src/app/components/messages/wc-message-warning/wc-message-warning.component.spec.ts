import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMessageWarningComponent } from './wc-message-warning.component';

describe('WcMessageWarningComponent', () => {
  let component: WcMessageWarningComponent;
  let fixture: ComponentFixture<WcMessageWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMessageWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMessageWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
