import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: ``,
  imports: [],
})
export class App {
   selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [User],
}
