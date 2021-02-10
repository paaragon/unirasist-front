import { Component, Input } from '@angular/core';
import { MessageSender } from './models/MessageSender';
import { Message } from './models/Message';
import { MessageResponse } from './models/MessageResponse';
import { ChatService } from './services/chat.service';
import { Context } from './models/Context';
import { makeid } from './global';

@Component({
  selector: 'wc-chat',
  templateUrl: './wc-chat.component.html',
  styleUrls: ['./wc-chat.component.scss']
})
export class WcChatComponent {

  userId: number = 1;

  collapsed = true;
  inputEnabled = false;
  messages: Message[] = [];

  private lastContext: Context;
  private pristineConversation = true;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    if (!this.collapsed) {
      this.inputEnabled = true;
      this.startConversation();
    }
  }

  collapseToggle() {
    this.collapsed = !this.collapsed;
    this.inputEnabled = !this.collapsed;
    if (this.pristineConversation) {
      this.startConversation();
    }
    this.pristineConversation = false;
  }

  newMessage(msg: Message) {
    this.messages.push(msg);
    this.sendMessage(msg);
  }

  resetConversation() {
    this.startConversation();
  }

  clickRespuesta(messageText: string) {
    const newMessage: Message = {
      htmlId: makeid(6),
      date: new Date(),
      from: MessageSender.FROM_USER,
      level: 'default',
      text: messageText,
      withLogo: true,
    }
    this.newMessage(newMessage);
  }

  private async startConversation() {
    this.messages = [];
    const firstMsg: Message = this.getFirstMsg();
    this.lastContext = this.getInitialContext();
    await this.sendMessage(firstMsg);
  }

  private async sendMessage(msg: Message) {
    let newResponse: Message[];
    try {
      const loaderMsg: Message = this.getLoadingMsg();
      this.messages.push(loaderMsg);
      this.inputEnabled = false;
      const response = await this.chatService.sendMessage(msg, this.lastContext);
      this.lastContext = response.context;
      newResponse = this.clasifyResponse(response);
    } catch (e) {
      console.log(e);
      newResponse = [this.getErrorMessage(e)];
    }
    this.messages.splice(-1);
    this.messages.push(...newResponse);
    this.inputEnabled = true;
  }

  private getInitialContext() {
    return {
      studentId: this.userId
    };
  }

  private getErrorMessage(e: any): Message {
    return {
      htmlId: makeid(6),
      date: new Date(),
      from: MessageSender.FROM_SYSTEM,
      level: 'error',
      text: '¡Ups! Parece que ha habido un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    }
  }

  private clasifyResponse(response: MessageResponse): Message[] {
    if (response && response.output && response.output) {
      return response.output.map((m, idx) => ({
        htmlId: makeid(6),
        date: new Date(),
        from: MessageSender.FROM_BOT,
        level: m.level,
        text: m.text,
        withLogo: idx === 0 || (idx > 0 && response.output[idx - 1].level === 'info')
      }));
    }

    return [];
  }

  private getFirstMsg(): Message {
    return {
      htmlId: makeid(6),
      date: new Date(),
      from: MessageSender.FROM_USER,
      level: 'default',
      text: '',
      withLogo: true,
    };
  }

  private getLoadingMsg(): Message {
    return {
      htmlId: makeid(6),
      date: new Date(),
      from: MessageSender.FROM_BOT,
      level: 'default',
      text: 'Esperando respuesta',
      withLogo: true,
      loading: true,
    };
  }
}
