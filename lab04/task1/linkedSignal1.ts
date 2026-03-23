@Component({
  /* ... */
})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();
  // Initialize selectedOption to the first shipping option.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);
  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
}