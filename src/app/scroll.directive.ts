import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective implements OnInit {
  @Input() animationType: string = 'fade-up'; // default animation type
  @Input() appScrollAnimation!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('my changes')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationType);
          this.renderer.addClass(this.el.nativeElement, 'visible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'visible');
          this.renderer.removeClass(this.el.nativeElement, this.animationType);
        }
      });
    });
    observer.observe(this.el.nativeElement);
  }
}
