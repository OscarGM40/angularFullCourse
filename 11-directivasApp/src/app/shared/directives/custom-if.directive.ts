import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective implements OnDestroy {
  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.vc.createEmbeddedView(this.tr);
    } else {
      this.vc.clear();
    }
  }

  constructor(
    private tr: TemplateRef<HTMLElement>,
    private vc: ViewContainerRef
  ) {}

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
