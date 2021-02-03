import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-wc-message-warning',
  templateUrl: './wc-message-warning.component.html',
  styleUrls: ['./wc-message-warning.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WcMessageWarningComponent implements OnInit {

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
