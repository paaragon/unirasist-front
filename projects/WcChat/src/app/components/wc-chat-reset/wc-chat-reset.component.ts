import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wc-chat-reset',
  templateUrl: './wc-chat-reset.component.html',
  styleUrls: ['./wc-chat-reset.component.scss']
})
export class WcChatResetComponent implements OnInit {

  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  resetClick() {
    this.reset.emit();
  }

}
