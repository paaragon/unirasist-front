import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcChatHeaderComponent } from './wc-chat-header.component';

describe('WcChatHeaderComponent', () => {
  let component: WcChatHeaderComponent;
  let fixture: ComponentFixture<WcChatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcChatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
