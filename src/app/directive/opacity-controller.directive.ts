import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOpacityController]',
})
export class OpacityControllerDirective {
  @HostBinding('style.opacity') opacity: number | undefined;
  @HostBinding('style.backgroundColor') color: string | undefined;


  @HostListener('mouseover')
  onMouseOver() {
    this.opacity = 1;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.opacity = 0.2;
  }
  constructor() {}
  ngOnInit(){
    this.opacity=0.1;
    this.color = 'yellow'
  }

  
}
