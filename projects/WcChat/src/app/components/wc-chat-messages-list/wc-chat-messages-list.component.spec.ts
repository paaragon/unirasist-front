import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcChatMessagesListComponent } from './wc-chat-messages-list.component';

describe('WcChatMessagesListComponent', () => {
  let component: WcChatMessagesListComponent;
  let fixture: ComponentFixture<WcChatMessagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcChatMessagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcChatMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
