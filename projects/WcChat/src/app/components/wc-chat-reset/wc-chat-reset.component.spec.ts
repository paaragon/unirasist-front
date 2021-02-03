import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcChatResetComponent } from './wc-chat-reset.component';

describe('WcChatResetComponent', () => {
  let component: WcChatResetComponent;
  let fixture: ComponentFixture<WcChatResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcChatResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcChatResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
