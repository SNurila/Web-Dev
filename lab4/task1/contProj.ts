@Component({
  selector: 'card-wrapper',
  template: `
    <div class="card">
      <ng-content />
    </div>
  `,
})
export class CardWrapper {}
@Component({
  imports: [NgComponentOutlet],
  template: `
    <ng-container *ngComponentOutlet="cardComponent; content: cardContent()" />
    <ng-template #contentTemplate>
      <h3>Dynamic Content</h3>
      <p>This content is projected into the card.</p>
    </ng-template>
  `,
})
export class DynamicCard {
  private vcr = inject(ViewContainerRef);
  cardComponent = CardWrapper;
  private contentTemplate = viewChild<TemplateRef<unknown>>('contentTemplate');
  cardContent = computed(() => {
    const template = this.contentTemplate();
    if (!template) return [];
    // Returns an array of projection slots. Each element represents one <ng-content> slot.
    // CardWrapper has one <ng-content>, so we return an array with one element.
    return [this.vcr.createEmbeddedView(template).rootNodes];
  });
}