@Component({
  selector: 'leaf-content',
  template: `This is the leaf content`,
})
export class LeafContent {}
@Component({
  selector: 'outer-container',
  template: `
    <p>This is the start of the outer container</p>
    <inner-item />
    <p>This is the end of the outer container</p>
  `,
})
export class OuterContainer {}
@Component({
  selector: 'inner-item',
  template: `<button (click)="loadContent()">Load content</button>`,
})
export class InnerItem {
  private viewContainer = inject(ViewContainerRef);
  loadContent() {
    this.viewContainer.createComponent(LeafContent);
  }
}