import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMessageDefaultComponent } from './wc-message-default.component';

describe('WcMessageDefaultComponent', () => {
  let component: WcMessageDefaultComponent;
  let fixture: ComponentFixture<WcMessageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMessageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMessageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
