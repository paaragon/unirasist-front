import { Component, OnInit, Input, ElementRef, IterableDiffers, IterableDiffer, ViewChildren, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/Message';
import { MessageSender } from '../../models/MessageSender';

@Component({
  selector: 'app-wc-chat-messages-list',
  templateUrl: './wc-chat-messages-list.component.html',
  styleUrls: ['./wc-chat-messages-list.component.scss']
})
export class WcChatMessagesListComponent implements OnInit {

  @Input() messages: Message[];
  @ViewChildren('msgs') msgElements: any;

  @Output() onClickRespuesta: EventEmitter<string> = new EventEmitter<string>();

  element: any;
  iterableDiffer: IterableDiffer<any>;

  scrollInterval: any;

  constructor(
    element: ElementRef,
    private iterableDiffers: IterableDiffers
  ) {
    this.element = element.nativeElement;
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.messages);
    if (changes) {
      setTimeout(() => this.scrollBottom());
    }
  }

  isFromUser(msg: Message): boolean {
    return msg.from === MessageSender.FROM_USER;
  }

  isDanger(msg: Message): boolean {
    return msg.level === 'error';
  }

  isDefault(msg: Message): boolean {
    return msg.from === MessageSender.FROM_BOT && msg.level === 'default';
  }

  isInfo(msg: Message): boolean {
    return msg.from === MessageSender.FROM_BOT && msg.level === 'info';
  }

  isWarning(msg: Message): boolean {
    return msg.from === MessageSender.FROM_BOT && msg.level === 'warning';
  }

  isBotonrespuesta(msg: Message): boolean {
    return msg.from === MessageSender.FROM_BOT && msg.level === 'botonrespuesta';
  }

  clickRespuesta(message: string) {
    this.onClickRespuesta.emit(message);
  }

  private scrollBottom() {
    const targetScrollTop: number = this.getTargetScrollTop();
    clearInterval(this.scrollInterval);
    this.scrollInterval = setInterval(() => this.animateScroll(targetScrollTop, 10), 1);
  }

  private animateScroll(targetScrollTop: number, step: number) {
    if (this.element.scrollHeight > targetScrollTop) {
      clearInterval(this.scrollInterval);
      this.element.scrollTop = targetScrollTop;
      return;
    }
    this.element.scrollTop += step;
  }

  private getTargetScrollTop(): number {
    const scrollToEl: any = this.getNextScrollMsg();
    if (scrollToEl) {
      console.log(scrollToEl.offsetTop, this.element.scrollHeight - 100);
      return scrollToEl.offsetTop - 100;
    } else {
      return this.element.scrollHeight + 100;
    }
  }

  private getNextScrollMsg() {
    if (!this.msgElements || this.msgElements.length === 0) {
      return;
    }
    const userMsgs = this.msgElements._results.filter(el => el.message.from === MessageSender.FROM_USER);
    if (!userMsgs || userMsgs.length === 0) {
      return this.msgElements._results[0].element;
    }

    return userMsgs[userMsgs.length - 1].element;
  }
}
