import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appRotate]'
})
export class RotateDirective {

  @Input('appRotate') initialRotation?: number;

  actualRotation: number = 0;
  DEFAULT_ROTATION = 10;

  constructor(private element: ElementRef) {
    this.actualRotation = this.initialRotation || 0;
    this.rotate(this.actualRotation);
  }

  updateRotation(isNegative: boolean) {
    const step = this.element.nativeElement.getAttribute('step') || this.DEFAULT_ROTATION;
    this.actualRotation = isNegative ? this.actualRotation - parseInt(step) : this.actualRotation + parseInt(step);
  }

  @HostListener('click', ["$event"])
  onClick(event: any) {
    const isNegative = event.getModifierState('CapsLock');

    this.updateRotation(isNegative);
    this.rotate(this.actualRotation);
  }

  rotate(rotation: number) {
    this.element.nativeElement.style.transform = `rotate(${rotation}deg)`;
  }

}
