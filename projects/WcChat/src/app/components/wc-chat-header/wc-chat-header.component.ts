import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-wc-chat-header',
  templateUrl: './wc-chat-header.component.html',
  styleUrls: ['./wc-chat-header.component.scss']
})
export class WcChatHeaderComponent implements OnInit {

  @Output() collapse: EventEmitter<void> = new EventEmitter<void>();

  @Input() collapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  collapseClick(){
    this.collapse.emit();
  }
}
