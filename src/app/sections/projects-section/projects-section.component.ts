import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

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
  period?: string;
  current?: boolean;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  /* Rows keep the one-line pitch visible and park the longer notes behind a toggle. */
  protected readonly expanded = signal<ReadonlySet<number>>(new Set());

  private readonly stackColors: Record<string, string> = {
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
    'GitHub Actions': '#2088ff',
    Elasticsearch: '#00bfb3',
    Kibana: '#f04e98'
  };

  protected readonly projects: ProjectItem[] = [
    {
      name: 'Treva: Digital Travel Marketplace',
      description:
        'Contributing to Treva, a digital travel marketplace that brings airport passenger services such as Lounge, Meet & Greet, Fast Track, Rent a Car and Airport Transfer together on a single platform for a seamless end-to-end journey.',
      descriptionLink: { label: 'Treva', url: 'https://www.trevaworld.com' },
      details: [
        'Contribute to the architecture, design, and development of backend services within a distributed microservices system.',
        'Build scalable, event-driven microservices using .NET, ABP Framework, RabbitMQ, Redis, and PostgreSQL.',
        'Deliver end-to-end features across backend services and Angular-based user interfaces.',
        'Support containerized deployments and CI/CD processes using Docker, Kubernetes, and Azure DevOps.'
      ],
      iconUrl: '/icons/project-treva.svg',
      iconColor: '#4fb0c6',
      company: 'TAV Technologies',
      period: '2026 — Present',
      current: true,
      stack: [
        '.NET',
        'ABP Framework',
        'Angular',
        'RabbitMQ',
        'Redis',
        'PostgreSQL',
        'Elasticsearch',
        'Kibana',
        'Docker',
        'Kubernetes',
        'Azure DevOps'
      ]
    },
    {
      name: 'Digital Logistics Platform',
      description:
        'Contributed to a large-scale, high-traffic, microservices-based logistics platform within a complex distributed system.',
      details: [
        'Developed and maintained backend services using DDD, Clean Architecture, and CQRS principles.',
        'Designed event-driven communication between distributed services using RabbitMQ.',
        'Implemented distributed caching with Redis and optimized data access using EF Core.',
        'Worked with PostgreSQL, MSSQL, and MongoDB across different domain services.',
        'Maintained Docker-based development environments and Azure DevOps CI/CD pipelines.'
      ],
      iconUrl: '/icons/project-logistics.svg',
      iconColor: '#cf7d3b',
      company: 'Borusan Logistics',
      period: '2024 — 2026',
      stack: ['.NET', 'PostgreSQL', 'MSSQL', 'MongoDB', 'RabbitMQ', 'Redis', 'Docker', 'Azure DevOps']
    },
    {
      name: 'OriginZero: Low-Code Workflow Automation Platform',
      description:
        'Co-founded and built a n8n-like low-code platform for creating automated workflows, integrating third-party APIs, and designing real-time dashboards.',
      details: [
        'Built the platform across the full stack using .NET, Node.js, React, TypeScript, and Python.',
        'Designed scalable REST APIs and microservices for workflow execution and external integrations.',
        'Implemented distributed communication, caching, and real-time features using RabbitMQ, Redis, and WebSocket.',
        'Designed data structures and storage solutions using PostgreSQL and MongoDB.',
        'Built Docker-based development and deployment environments and contributed to CI/CD pipelines.',
        'Led key product, technology, and architecture decisions while managing development and design teams.',
        'Took part in technical hiring and helped establish the engineering culture and delivery process.'
      ],
      iconUrl: '/icons/project-workflow.svg',
      iconColor: '#63bd42',
      company: 'OriginZero Technologies',
      period: '2021 — 2024',
      stack: [
        'Node.js',
        '.NET',
        'React',
        'TypeScript',
        'Python',
        'RabbitMQ',
        'Redis',
        'PostgreSQL',
        'MongoDB',
        'WebSocket',
        'Docker'
      ],
      repoUrl: 'https://github.com/originzero-io/originzero'
    },
    {
      name: 'ERP & Business Management Solutions',
      description:
        'Designed and delivered ERP and business management applications for industrial companies, including integrations with Logo Software and customer-specific workflows.',
      details: [
        'Built small to medium-scale ERP applications using .NET, React, Angular, MSSQL, and PostgreSQL.',
        'Worked directly with customers to understand their business processes and turn them into software solutions.',
        'Developed backend services and user-friendly interfaces for daily business operations.',
        'Integrated applications with Logo Software to support connected and consistent business processes.',
        'Contributed to product research by identifying customer needs and industry trends.'
      ],
      iconUrl: '/icons/project-erp.svg',
      iconColor: '#9b8dd6',
      company: 'Anaks R&D',
      period: '2020 — 2024',
      stack: ['.NET', 'React', 'Angular', 'Node.js', 'MSSQL', 'PostgreSQL']
    },
    {
      name: 'Production Tracking & Control Systems',
      description:
        'Delivered software solutions for automotive manufacturers to support production tracking, process management, and real-time monitoring.',
      details: [
        'Worked closely with customers and production teams to analyze operational needs and define software requirements.',
        'Developed full-stack applications for traceability, production monitoring, process management, and reporting.',
        'Integrated software systems with field devices to collect and process production data.',
        'Built backend and frontend features using .NET, Node.js, React, Angular, and WebSocket.',
        'Managed production data using MSSQL and PostgreSQL.',
        'Delivered and supported software used in real production environments.'
      ],
      iconUrl: '/icons/project-factory.svg',
      iconColor: '#6fa0c9',
      company: 'APRA Engineering',
      period: '2018 — 2020',
      stack: ['.NET', 'React', 'Node.js', 'Angular', 'MSSQL', 'PostgreSQL', 'RabbitMQ', 'Azure DevOps', 'WebSocket']
    },
    {
      name: 'Smart Agriculture Solution',
      description:
        'Developed a specialized IoT platform that uses real-time sensor data to monitor plant health and manage irrigation cycles.',
      details: [
        'Built the full-stack application using .NET, Node.js, React, and PostgreSQL.',
        'Processed real-time sensor data to support plant monitoring and irrigation decisions.',
        'Developed monitoring interfaces that made field data easy to follow and understand.',
        'Implemented real-time updates between the backend and user interface using WebSocket.'
      ],
      iconUrl: '/icons/project-agri.svg',
      iconColor: '#2f9f63',
      company: 'APRA Engineering',
      period: '2018 — 2020',
      stack: ['.NET', 'Node.js', 'React', 'PostgreSQL', 'WebSocket']
    }
  ];

  protected techColor(item: string): string {
    return this.stackColors[item] ?? '#9a998f';
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

  protected isExpanded(index: number): boolean {
    return this.expanded().has(index);
  }

  protected toggleDetails(index: number): void {
    const next = new Set(this.expanded());

    if (!next.delete(index)) {
      next.add(index);
    }

    this.expanded.set(next);
  }
}
