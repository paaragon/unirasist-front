import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMessageFromuserComponent } from './wc-message-fromuser.component';

describe('WcMessageFromuserComponent', () => {
  let component: WcMessageFromuserComponent;
  let fixture: ComponentFixture<WcMessageFromuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMessageFromuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMessageFromuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
