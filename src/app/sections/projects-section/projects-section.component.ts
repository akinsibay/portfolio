import { Component, ElementRef, ViewChild } from '@angular/core';

interface ProjectItem {
  name: string;
  description: string;
  details: string[];
  stack: string[];
  iconUrl: string;
  iconColor: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  @ViewChild('track', { static: true }) private trackRef?: ElementRef<HTMLElement>;
  private readonly stackColors: Record<string, string> = {
    '.NET Core': '#512bd4',
    '.NET': '#512bd4',
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
}
