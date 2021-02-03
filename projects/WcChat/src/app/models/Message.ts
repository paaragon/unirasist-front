import { MessageSender } from "./MessageSender";

export interface Message {
    text: string;
    date: Date;
    from: MessageSender;
    level: 'default' | 'info' | 'warning' | 'error' | string;
    withLogo?: boolean;
    loading?: boolean;
}