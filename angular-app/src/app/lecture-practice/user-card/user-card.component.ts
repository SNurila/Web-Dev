import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './user-card-child.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  username = '';

  Greet() {
    alert("Good day " + this.username);
  }

  getData(msg: string) {
    console.log(msg);
  }
}
