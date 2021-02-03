import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WcChatComponent } from './wc-chat.component';
import { WcChatHeaderComponent } from './components/wc-chat-header/wc-chat-header.component';
import { WcChatMessagesListComponent } from './components/wc-chat-messages-list/wc-chat-messages-list.component';
import { WcChatInputBoxComponent } from './components/wc-chat-input-box/wc-chat-input-box.component';
import { WcMessageDefaultComponent } from './components/messages/wc-message-default/wc-message-default.component';
import { WcMessageInfoComponent } from './components/messages/wc-message-info/wc-message-info.component';
import { WcMessageWarningComponent } from './components/messages/wc-message-warning/wc-message-warning.component';
import { WcMessageDangerComponent } from './components/messages/wc-message-danger/wc-message-danger.component';
import { WcMessageFromuserComponent } from './components/messages/wc-message-fromuser/wc-message-fromuser.component';
import { ChatService } from './services/chat.service';
import { WcChatResetComponent } from './components/wc-chat-reset/wc-chat-reset.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { WcMessageBotonrespuestaComponent } from './components/messages/wc-message-botonrespuesta/wc-message-botonrespuesta.component';

@NgModule({
  declarations: [
    WcChatComponent,
    WcChatHeaderComponent,
    WcChatMessagesListComponent,
    WcChatInputBoxComponent,
    WcMessageDefaultComponent,
    WcMessageInfoComponent,
    WcMessageWarningComponent,
    WcMessageDangerComponent,
    WcMessageFromuserComponent,
    WcChatResetComponent,
    SafeHtmlPipe,
    WcMessageBotonrespuestaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ChatService
  ],
  entryComponents: [WcChatComponent]
})
export class WcChatModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(WcChatComponent, { injector });
    customElements.define('wc-chat', webComponent);
  }

  ngDoBootstrap() { }
}
