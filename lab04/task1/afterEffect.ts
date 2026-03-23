@Component({
  /*...*/
})
export class MyFancyChart {
  chartData = input.required<ChartData>();
  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  chart: ChartInstance;
  constructor() {
    // Run a single time to create the chart instance
    afterNextRender({
      write: () => {
        this.chart = initializeChart(this.canvas().nativeElement(), this.chartData());
      },
    });
    // Re-run after DOM has been updated whenever `chartData` changes
    afterRenderEffect(() => {
      this.chart.updateData(this.chartData());
    });
  }
}