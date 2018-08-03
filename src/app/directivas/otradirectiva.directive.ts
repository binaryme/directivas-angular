import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOtradirectiva]'
})
export class OtradirectivaDirective {
  @HostBinding('class.item-orange') mostrar: boolean = false;

  @HostListener('mouseover')
  onMouseover() {
    this.mostrar = true;
  }

  @HostListener('mouseout')
  onmouseout() {
    this.mostrar = false;
  }
  constructor() {}
}
