import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-wc-message-botonrespuesta',
  templateUrl: './wc-message-botonrespuesta.component.html',
  styleUrls: ['./wc-message-botonrespuesta.component.scss']
})
export class WcMessageBotonrespuestaComponent implements OnInit {

  opciones: string[];

  _message: Message;
  @Input() set message(msg: Message) {
    this._message = msg;
    this.opciones = msg.text?.split('||');
  }
  get message() { return this._message; };

  @Output() onClickRespuesta: EventEmitter<string> = new EventEmitter<string>();


  enabled = true;

  element: any;
  constructor(
    element: ElementRef
  ) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
  }

  clickRespuesta(option: string) {
    if (this.enabled) {
      this.onClickRespuesta.emit(option);
      this.enabled = false;
    }
  }

}
