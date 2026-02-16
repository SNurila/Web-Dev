import { Component } from '@angular/core';
import { UserCardComponent } from './lecture-practice/user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent],
  template: `<app-user-card></app-user-card>`
})
export class AppComponent {}
