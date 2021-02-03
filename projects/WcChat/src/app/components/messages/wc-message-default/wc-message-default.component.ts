import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-wc-message-default',
  templateUrl: './wc-message-default.component.html',
  styleUrls: ['./wc-message-default.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WcMessageDefaultComponent implements OnInit {

  @Input() message: Message;

  element: any;
  constructor(
    element: ElementRef
  ) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
  }

}
