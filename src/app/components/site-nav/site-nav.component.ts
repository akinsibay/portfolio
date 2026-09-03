import { Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  isCta?: boolean;
}

@Component({
  selector: 'app-site-nav',
  standalone: true,
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss'
})
export class SiteNavComponent implements OnInit, OnDestroy {
  protected readonly navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Focus', href: '#focus' },
    { label: 'Technologies', href: '#expertise' },
    { label: 'Download CV', href: '/resume.html', external: true, isCta: true }
  ];

  protected readonly activeHref = signal<string>('#about');
  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);

  private observer: IntersectionObserver | null = null;
  private removeScrollListener: (() => void) | null = null;
  private rafId: number | null = null;

  constructor(private readonly ngZone: NgZone) {}

  ngOnInit(): void {
    this.observeSections();
    this.trackScroll();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.removeScrollListener?.();
    this.removeScrollListener = null;

    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible) {
            this.ngZone.run(() => this.activeHref.set(`#${visible.target.id}`));
          }
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.6, 1] }
      );

      for (const link of this.navLinks.filter((item) => item.href.startsWith('#'))) {
        const section = document.querySelector(link.href);
        if (section) {
          this.observer?.observe(section);
        }
      }
    });
  }

  private trackScroll(): void {
    this.ngZone.runOutsideAngular(() => {
      const onScroll = (): void => {
        if (this.rafId !== null) {
          return;
        }

        this.rafId = window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

          this.ngZone.run(() => {
            this.scrolled.set(scrollTop > 12);
            this.progress.set(ratio);
          });

          this.rafId = null;
        });
      };

      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      this.removeScrollListener = () => window.removeEventListener('scroll', onScroll);
    });
  }
}
