import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WcChatComponent } from './wc-chat.component';

describe('AppComponent', () => {
  let component: WcChatComponent;
  let fixture: ComponentFixture<WcChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
