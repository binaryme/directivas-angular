import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEjmidirectiva]'
})
export class EjmidirectivaDirective {
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
