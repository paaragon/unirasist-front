import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-wc-message-info',
  templateUrl: './wc-message-info.component.html',
  styleUrls: ['./wc-message-info.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WcMessageInfoComponent implements OnInit {

  @Input() message: Message

  element: any;
  constructor(
    element: ElementRef
  ) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
  }

}
