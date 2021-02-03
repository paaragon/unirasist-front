import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcChatInputBoxComponent } from './wc-chat-input-box.component';

describe('WcChatInputBoxComponent', () => {
  let component: WcChatInputBoxComponent;
  let fixture: ComponentFixture<WcChatInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcChatInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcChatInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
