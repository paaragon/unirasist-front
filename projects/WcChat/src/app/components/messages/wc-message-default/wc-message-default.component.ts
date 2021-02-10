import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../models/Message';
import enlacerespuestaEvt from './subevents/enlacerespuesta.evt';

@Component({
  selector: 'app-wc-message-default',
  templateUrl: './wc-message-default.component.html',
  styleUrls: ['./wc-message-default.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WcMessageDefaultComponent implements OnInit {

  @Input() message: Message;

  @Output() onMessage: EventEmitter<string> = new EventEmitter<string>();
  onMessageEnabled = true;

  element: any;
  constructor(
    element: ElementRef
  ) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    setTimeout(() => this.bindEvents());
  }

  bindEvents() {
    enlacerespuestaEvt.bindEvent(this.message, this.onMessage, this.onMessageEnabled);
  }
}
