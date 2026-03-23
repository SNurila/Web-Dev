@Component({
  /* ... */
})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();
  // Select the first shipping option by default.
  selectedOption = signal(this.shippingOptions()[0]);
  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);
  }
}