import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-wc-message-fromuser',
  templateUrl: './wc-message-fromuser.component.html',
  styleUrls: ['./wc-message-fromuser.component.scss']
})
export class WcMessageFromuserComponent implements OnInit {

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
