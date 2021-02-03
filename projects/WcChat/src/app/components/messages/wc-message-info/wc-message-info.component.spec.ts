import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMessageInfoComponent } from './wc-message-info.component';

describe('WcMessageInfoComponent', () => {
  let component: WcMessageInfoComponent;
  let fixture: ComponentFixture<WcMessageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMessageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMessageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
