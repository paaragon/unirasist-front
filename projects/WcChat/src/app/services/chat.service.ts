import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Context } from '../models/Context';
import { MessageResponse } from '../models/MessageResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  public sendMessage(message: Message, context: Context): Promise<MessageResponse> {
    const body = {
      context,
      input: {
        text: message.text,
      },
    };
    return this.http.post<MessageResponse>(`http://localhost:3001/api/v1/messages/`, body).toPromise();
  }
}
