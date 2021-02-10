import { Message } from '../../../../models/Message';
import { EventEmitter } from '@angular/core';

export default {
    bindEvent: (msg: Message, emitter: EventEmitter<String>, emitterEnabled: boolean) => {
        const element = document.getElementById(msg.htmlId);
        const enlacerespuestas: Element[] = Array.from(element.querySelectorAll('.enlacerespuesta'));
        if (enlacerespuestas && enlacerespuestas.length > 0) {
            for (const enlacerespuesta of enlacerespuestas) {
                const text = enlacerespuesta.textContent;
                enlacerespuesta.addEventListener('click', () => {
                    if (emitterEnabled) {
                        emitter.emit(text);
                        emitterEnabled = false;
                    }
                });
            }
        }
    }
}