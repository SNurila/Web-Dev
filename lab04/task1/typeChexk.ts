@Component({
  /*...*/
})
export class CustomSlider {
  widthPx = input('', {transform: appendPx});
}
function appendPx(value: number): string {
  return `${value}px`;
}