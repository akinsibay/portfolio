import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Tracks the pointer inside a card and exposes its position as --spot-x / --spot-y
 * so the card can render a subtle highlight that follows the cursor.
 */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
  host: { class: 'spotlight' }
})
export class SpotlightDirective implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly ngZone = inject(NgZone);
  private cleanup: (() => void) | null = null;
  private rafId: number | null = null;

  ngOnInit(): void {
    const element = this.host.nativeElement as HTMLElement;

    this.ngZone.runOutsideAngular(() => {
      const onMove = (event: PointerEvent): void => {
        if (this.rafId !== null) {
          return;
        }

        this.rafId = window.requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
          element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
          this.rafId = null;
        });
      };

      element.addEventListener('pointermove', onMove, { passive: true });
      this.cleanup = () => element.removeEventListener('pointermove', onMove);
    });
  }

  ngOnDestroy(): void {
    this.cleanup?.();
    this.cleanup = null;

    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}
