@Component({
  selector: 'counter',
  template: `<p>Count: {{ count() }}</p>`,
})
export class Counter {
  count = signal(0);
  increment() {
    this.count.update((c) => c + 1);
  }
}
@Component({
  imports: [NgComponentOutlet],
  template: `
    <ng-container [ngComponentOutlet]="counterComponent" #outlet="ngComponentOutlet" />
    <button (click)="outlet.componentInstance?.increment()">Increment</button>
  `,
})
export class CounterHost {
  counterComponent = Counter;
}