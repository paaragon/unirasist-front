import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMessageDangerComponent } from './wc-message-danger.component';

describe('WcMessageDangerComponent', () => {
  let component: WcMessageDangerComponent;
  let fixture: ComponentFixture<WcMessageDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMessageDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMessageDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
