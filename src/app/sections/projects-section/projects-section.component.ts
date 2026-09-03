import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SpotlightDirective } from '../../shared/spotlight.directive';

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectItem {
  name: string;
  description: string;
  descriptionLink?: ProjectLink;
  details: string[];
  stack: string[];
  iconUrl: string;
  iconColor: string;
  repoUrl?: string;
  company?: string;
  role?: string;
  period?: string;
  current?: boolean;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RevealDirective, SpotlightDirective],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track', { static: true }) private trackRef?: ElementRef<HTMLElement>;

  protected readonly progress = signal(0);
  protected readonly atStart = signal(true);
  protected readonly atEnd = signal(false);

  private removeScrollListener: (() => void) | null = null;
  private rafId: number | null = null;

  constructor(private readonly ngZone: NgZone) {}

  private readonly stackColors: Record<string, string> = {
    '.NET Core': '#512bd4',
    '.NET': '#512bd4',
    'ABP Framework': '#7f6df2',
    'C#': '#68217a',
    'Node.js': '#5fa04e',
    React: '#61dafb',
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3776ab',
    WebSocket: '#00b2ff',
    RabbitMQ: '#ff6600',
    Redis: '#dc382d',
    PostgreSQL: '#4169e1',
    MongoDB: '#47a248',
    Docker: '#2496ed',
    Kubernetes: '#326ce5',
    'Azure DevOps': '#0078d7',
    'EF Core': '#6b6b6b',
    MSSQL: '#cc2927',
    'SQL Server': '#cc2927',
    WinForms: '#512bd4',
    Angular: '#dd0031',
    'GitHub Actions': '#2088ff'
  };

  protected readonly projects: ProjectItem[] = [
    {
      name: 'Treva: Digital Travel Marketplace',
      description:
        'Contributing to Treva, a digital travel marketplace that brings airport passenger services together on a single platform to deliver a seamless end-to-end journey experience.',
      descriptionLink: { label: 'Treva', url: 'https://www.trevaworld.com' },
      details: [
        'Contribute to the architecture, design, and end-to-end development of backend services within a distributed microservices ecosystem.',
        'Design and develop scalable, event-driven microservices and deliver end-to-end features across backend services and user interfaces.'
      ],
      iconUrl: '/icons/project-treva.svg',
      iconColor: '#4fb0c6',
      current: true,
      stack: [
        '.NET',
        'ABP Framework',
        'Angular',
        'RabbitMQ',
        'Redis',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'Azure DevOps'
      ]
    },
    {
      name: 'OriginZero: Low-Code Workflow Automation Platform',
      description:
        'Co-founded and built a n8n-like low-code workflow automation platform with a drag-and-drop interface for designing complex workflows and API integrations.',
      details: ['Architected and developed real-time features including live dashboards, chat, and collaborative workflow management.'],
      iconUrl: '/icons/project-workflow.svg',
      iconColor: '#53c400',
      stack: ['Node.js', '.NET Core', 'React', 'TypeScript', 'Python', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'WebSocket'],
      repoUrl: 'https://github.com/originzero-io/originzero'
    },
    {
      name: 'Digital Logistics Platform',
      description:
        'Contributed to a large-scale, high-traffic, microservices-based logistics platform within a complex distributed system.',
      details: [
        'Developed backend services across multiple domains using DDD, Clean Architecture, and CQRS to keep the system scalable and maintainable'
      ],
      iconUrl: '/icons/project-logistics.svg',
      iconColor: '#cf7d3b',
      stack: ['.NET Core', 'PostgreSQL', 'MSSQL', 'MongoDB', 'RabbitMQ', 'Redis', 'Docker', 'Azure DevOps']
    },
    {
      name: 'Production Tracking & Control Systems',
      description:
        'Delivered end-to-end software solutions for global automotive leaders (Renault, Ford, Tofaş) to monitor and control production line efficiency.',
      details: [
        'Built systems that interface directly with field devices and PLC units to collect, process, and visualize real-time manufacturing data.'
      ],
      iconUrl: '/icons/project-factory.svg',
      iconColor: '#6fa0c9',
      stack: ['.NET Core', 'React', 'Node.js', 'Angular', 'MSSQL', 'PostgreSQL', 'RabbitMQ', 'Azure DevOps', 'WebSocket']
    },
    {
      name: 'ERP & Business Management Solutions',
      description:
        'Designed and deployed medium-scale ERP applications with full integration into Logo Software for streamlined business operations.',
      details: ['Automated complex industrial workflows, bridging shop floor data with corporate resource planning.'],
      iconUrl: '/icons/project-erp.svg',
      iconColor: '#9b8dd6',
      stack: ['.NET Core', 'React', 'Angular', 'Node.js', 'MSSQL', 'PostgreSQL']
    },
    {
      name: 'Smart Agriculture Solution',
      description:
        'Developed a specialized IoT platform that analyzes real-time sensor data to manage plant health and irrigation cycles.',
      details: [
        'Created automated irrigation programming based on specific recipe-driven parameters and environmental feedback.',
        'Integrated various sensor types to provide a centralized, cloud-accessible interface for remote farm management.'
      ],
      iconUrl: '/icons/project-agri.svg',
      iconColor: '#2f9f63',
      stack: ['.NET Core', 'React', 'PostgreSQL', 'WebSocket']
    }
  ];

  ngAfterViewInit(): void {
    const track = this.trackRef?.nativeElement;
    if (!track) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const onScroll = (): void => {
        if (this.rafId !== null) {
          return;
        }

        this.rafId = window.requestAnimationFrame(() => {
          this.syncScrollState(track);
          this.rafId = null;
        });
      };

      this.ngZone.run(() => this.syncScrollState(track));
      track.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });

      this.removeScrollListener = () => {
        track.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    });
  }

  ngOnDestroy(): void {
    this.removeScrollListener?.();
    this.removeScrollListener = null;

    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  protected scroll(direction: 'left' | 'right'): void {
    const track = this.trackRef?.nativeElement;
    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>('.project-card');
    const gapValue = getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0px';
    const gap = Number.parseFloat(gapValue) || 0;
    const step = firstCard ? firstCard.getBoundingClientRect().width + gap : Math.max(track.clientWidth * 0.86, 320);

    track.scrollBy({
      left: direction === 'right' ? step : -step,
      behavior: 'smooth'
    });
  }

  protected techColor(item: string): string {
    return this.stackColors[item] ?? '#82b9e0';
  }

  protected cardIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  protected descriptionParts(project: ProjectItem): { before: string; label: string; url: string; after: string } | null {
    const link = project.descriptionLink;
    if (!link) {
      return null;
    }

    const start = project.description.indexOf(link.label);
    if (start < 0) {
      return null;
    }

    return {
      before: project.description.slice(0, start),
      label: link.label,
      url: link.url,
      after: project.description.slice(start + link.label.length)
    };
  }

  private syncScrollState(track: HTMLElement): void {
    const scrollable = track.scrollWidth - track.clientWidth;
    const ratio = scrollable > 8 ? Math.min(Math.max(track.scrollLeft / scrollable, 0), 1) : 0;

    const update = (): void => {
      this.progress.set(ratio);
      this.atStart.set(track.scrollLeft <= 4);
      this.atEnd.set(scrollable <= 8 || track.scrollLeft >= scrollable - 4);
    };

    if (NgZone.isInAngularZone()) {
      update();
    } else {
      this.ngZone.run(update);
    }
  }
}
