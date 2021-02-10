import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Message } from '../../models/Message';
import { MessageSender } from '../../models/MessageSender';
import {makeid} from '../../global';

@Component({
  selector: 'app-wc-chat-input-box',
  templateUrl: './wc-chat-input-box.component.html',
  styleUrls: ['./wc-chat-input-box.component.scss']
})
export class WcChatInputBoxComponent implements OnInit, OnChanges {

  @Input() inputEnabled: boolean = true;
  @Output() message: EventEmitter<Message> = new EventEmitter<Message>();
  @ViewChild('input') inputEl: ElementRef<HTMLElement>;

  charCounter = 0;
  charMax = 140;

  text: string = '';
  placeholderEnabled = 'Escribe aquí tu mensaje...';
  placeholderDisabled = 'Esperando respuesta...';
  placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.setInputDisabled(), 0);
  }

  ngOnChanges() {
    setTimeout(() => this.setInputDisabled(), 0);
  }

  setInputDisabled() {
    if (!this.inputEnabled) {
      this.text = '';
      this.placeholder = this.placeholderDisabled;
    } else if (this.inputEnabled && this.inputEl) {
      this.placeholder = this.placeholderEnabled;
      this.inputEl.nativeElement.focus();
    }
  }

  onInputChange(event: KeyboardEvent) {
    this.charCounter = this.text.length;
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  sendMessage() {
    const textClean = this.cleanText(this.text);
    console.log(this.inputEnabled);
    if (textClean === ' ' || textClean.length === 0 || !this.inputEnabled) {
      return;
    }

    const msg: Message = {
      htmlId: makeid(6),
      date: new Date(),
      from: MessageSender.FROM_USER,
      text: textClean,
      level: 'default'
    };

    this.message.emit(msg);
    this.text = '';
  }

  cleanText(text: string) {
    return (text || '').replace(/\s\s+/g, ' ');
  }

  isMaxLength() {
    return this.text.length >= this.charMax;
  }
}
