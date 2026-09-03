import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SpotlightDirective } from '../../shared/spotlight.directive';

interface FocusItem {
  title: string;
  description: string;
  iconUrl: string;
  accent: string;
}

@Component({
  selector: 'app-focus-section',
  standalone: true,
  imports: [RevealDirective, SpotlightDirective],
  templateUrl: './focus-section.component.html',
  styleUrl: './focus-section.component.scss'
})
export class FocusSectionComponent {
  protected readonly items: FocusItem[] = [
    {
      title: 'Scalable Backend Systems',
      description: 'Designing and building backend services that scale reliably under increasing load.',
      iconUrl: '/icons/focus-backend.svg',
      accent: '#47c16d'
    },
    {
      title: 'Distributed Architectures',
      description: 'Working with microservices and event-driven systems to build resilient applications.',
      iconUrl: '/icons/focus-distributed.svg',
      accent: '#7ea7f8'
    },
    {
      title: 'Clean & Maintainable Code',
      description: 'Writing code that is easy to understand, extend, and operate in production.',
      iconUrl: '/icons/focus-clean-code.svg',
      accent: '#7ecbba'
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

  protected indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
