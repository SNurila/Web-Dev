@Component({
  selector: 'custom-slider',
  /*...*/
})
export class CustomSlider {
  label = input('', {transform: trimString});
}
function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}