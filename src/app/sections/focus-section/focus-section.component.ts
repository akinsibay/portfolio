import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface FocusItem {
  title: string;
  description: string;
  iconUrl: string;
  accent: string;
}

@Component({
  selector: 'app-focus-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './focus-section.component.html',
  styleUrl: './focus-section.component.scss'
})
export class FocusSectionComponent {
  protected readonly items: FocusItem[] = [
    {
      title: 'Scalable Distributed Systems',
      description: 'Designing microservices and event-driven systems that scale reliably under increasing load.',
      iconUrl: '/icons/focus-distributed.svg',
      accent: '#47c16d'
    },
    {
      title: 'Product-Oriented Development',
      description: 'Translating business needs into practical and robust technical solutions.',
      iconUrl: '/icons/focus-product.svg',
      accent: '#c69bef'
    },
    {
      title: 'Performance & Efficiency',
      description: 'Continuously improving system performance and optimizing resource usage.',
      iconUrl: '/icons/focus-performance.svg',
      accent: '#f0aa65'
    },
    {
      title: 'User-Centric Interfaces',
      description: 'Building intuitive and responsive interfaces with a strong focus on usability and user experience.',
      iconUrl: '/icons/focus-interface.svg',
      accent: '#74bde9'
    }
  ];
}
