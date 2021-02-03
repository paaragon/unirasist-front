import { Context } from './Context';
import { Message } from './Message';

export interface MessageResponse {
    context: Context;
    output: Message[];
}