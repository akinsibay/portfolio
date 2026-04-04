import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ExpertiseSectionComponent } from './sections/expertise-section/expertise-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';

@Component({
  selector: 'app-root',
  imports: [
    SiteNavComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ExpertiseSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  private removePointerListener: (() => void) | null = null;
  private rafId: number | null = null;
  private pointerX = window.innerWidth / 2;
  private pointerY = window.innerHeight / 2;

  constructor(private readonly ngZone: NgZone) {}

  protected readonly currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.applyPointerPosition();

    this.ngZone.runOutsideAngular(() => {
      const onPointerMove = (event: PointerEvent): void => {
        this.pointerX = event.clientX;
        this.pointerY = event.clientY;

        if (this.rafId !== null) {
          return;
        }

        this.rafId = window.requestAnimationFrame(() => {
          this.applyPointerPosition();
          this.rafId = null;
        });
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      this.removePointerListener = () => window.removeEventListener('pointermove', onPointerMove);
    });
  }

  ngOnDestroy(): void {
    if (this.removePointerListener) {
      this.removePointerListener();
      this.removePointerListener = null;
    }

    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private applyPointerPosition(): void {
    document.documentElement.style.setProperty('--mouse-x', `${this.pointerX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${this.pointerY}px`);
  }
}
