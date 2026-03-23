@Injectable({providedIn: 'root'})
export class CounterState {
  // Private writable state
  private readonly _count = signal(0);
  readonly count = this._count.asReadonly(); // public readonly
  increment() {
    this._count.update((v) => v + 1);
  }
}
@Component({
  /* ... */
})
export class AwesomeCounter {
  state = inject(CounterState);
  count = this.state.count; // can read but not modify
  increment() {
    this.state.increment();
  }
}