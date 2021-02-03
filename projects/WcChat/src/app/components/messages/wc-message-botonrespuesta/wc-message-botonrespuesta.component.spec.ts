import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcMessageBotonrespuestaComponent } from './wc-message-botonrespuesta.component';

describe('WcMessageBotonrespuestaComponent', () => {
  let component: WcMessageBotonrespuestaComponent;
  let fixture: ComponentFixture<WcMessageBotonrespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcMessageBotonrespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcMessageBotonrespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
