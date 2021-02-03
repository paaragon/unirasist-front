import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-wc-message-danger',
  templateUrl: './wc-message-danger.component.html',
  styleUrls: ['./wc-message-danger.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WcMessageDangerComponent implements OnInit {

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
