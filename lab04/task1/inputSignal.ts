import {Component, input, computed} from '@angular/core';
@Component({
  /*...*/
})
export class CustomSlider {
  // Declare an input named 'value' with a default value of zero.
  value = input(0);
  // Create a computed expression that reads the value input
  label = computed(() => `The slider's value is ${this.value()}`);
}