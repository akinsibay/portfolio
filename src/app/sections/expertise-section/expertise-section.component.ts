import { Component } from '@angular/core';

interface TechCard {
  name: string;
  iconSlug: string;
  group: string;
  accent: string;
  iconUrl?: string;
}

interface TechGroup {
  title: string;
  cards: TechCard[];
}

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss'
})
export class ExpertiseSectionComponent {
  protected readonly techCards: TechCard[] = [
    { name: '.NET', iconSlug: 'dotnet', group: 'Backend', accent: '#512bd4' },
    {
      name: 'C#',
      iconSlug: 'csharp',
      group: 'Backend',
      accent: '#68217a',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    { name: 'Node.js', iconSlug: 'nodedotjs', group: 'Backend', accent: '#5fa04e' },
    { name: 'TypeScript', iconSlug: 'typescript', group: 'Backend', accent: '#3178c6' },
    { name: 'Express', iconSlug: 'express', group: 'Backend', accent: '#ffffff' },
    { name: 'RabbitMQ', iconSlug: 'rabbitmq', group: 'Backend', accent: '#ff6600' },
    { name: 'Redis', iconSlug: 'redis', group: 'Backend', accent: '#dc382d' },
    {
      name: 'WebSocket',
      iconSlug: 'websocket',
      group: 'Backend',
      accent: '#00b2ff',
      iconUrl: '/icons/websocket.svg'
    },
    { name: 'React', iconSlug: 'react', group: 'Frontend', accent: '#61dafb' },
    { name: 'Angular', iconSlug: 'angular', group: 'Frontend', accent: '#dd0031' },
    { name: 'JavaScript', iconSlug: 'javascript', group: 'Frontend', accent: '#f7df1e' },
    { name: 'HTML5', iconSlug: 'html5', group: 'Frontend', accent: '#e34f26' },
    { name: 'CSS', iconSlug: 'css', group: 'Frontend', accent: '#1572b6' },
    { name: 'PostgreSQL', iconSlug: 'postgresql', group: 'Databases', accent: '#4169e1' },
    {
      name: 'SQL Server',
      iconSlug: 'microsoftsqlserver',
      group: 'Databases',
      accent: '#cc2927',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
    },
    { name: 'MySQL', iconSlug: 'mysql', group: 'Databases', accent: '#4479a1' },
    { name: 'MongoDB', iconSlug: 'mongodb', group: 'Databases', accent: '#47a248' },
    { name: 'Docker', iconSlug: 'docker', group: 'DevOps', accent: '#2496ed' },
    { name: 'Jenkins', iconSlug: 'jenkins', group: 'DevOps', accent: '#d33833' },
    {
      name: 'Azure DevOps',
      iconSlug: 'azuredevops',
      group: 'DevOps',
      accent: '#0078d7',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg'
    },
    { name: 'GitHub Actions', iconSlug: 'githubactions', group: 'DevOps', accent: '#2088ff' }
  ];

  protected readonly groupOrder: string[] = [
    'Frontend',
    'Backend',
    'Databases',
    'DevOps'
  ];

  protected iconUrl(slug: string, accent: string, fallbackUrl?: string): string {
    if (fallbackUrl) {
      return fallbackUrl;
    }

    return `https://cdn.simpleicons.org/${slug}/${accent.replace('#', '')}`;
  }

  protected trackByName(_: number, card: TechCard): string {
    return card.name;
  }

  protected groupedCards(): TechGroup[] {
    return this.groupOrder
      .map((title) => ({
        title,
        cards: this.techCards.filter((card) => card.group === title)
      }))
      .filter((group) => group.cards.length > 0);
  }
}
