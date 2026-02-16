import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './user-card-child.component.html',
  standalone: true
})
export class ChildComponent {

  @Input() message: string = '';
  @Output() notify = new EventEmitter<string>();

  sendData() {
    this.notify.emit('Hello parent!');
  }
}
