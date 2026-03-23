export const THEME_DATA = new InjectionToken<string>('THEME_DATA', {
  factory: () => 'light',
});
@Component({
  selector: 'themed-panel',
  template: `<div [class]="theme">...</div>`,
})
export class ThemedPanel {
  theme = inject(THEME_DATA);
}
@Component({
  selector: 'dynamic-panel',
  imports: [NgComponentOutlet],
  template: `<ng-container *ngComponentOutlet="panelComponent; injector: customInjector" />`,
})
export class DynamicPanel {
  panelComponent = ThemedPanel;
  customInjector = Injector.create({
    providers: [{provide: THEME_DATA, useValue: 'dark'}],
  });
}