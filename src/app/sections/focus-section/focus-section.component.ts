import { Component } from '@angular/core';

interface FocusItem {
  title: string;
  description: string;
  iconUrl: string;
}

@Component({
  selector: 'app-focus-section',
  standalone: true,
  templateUrl: './focus-section.component.html',
  styleUrl: './focus-section.component.scss'
})
export class FocusSectionComponent {
  protected readonly items: FocusItem[] = [
    {
      title: 'Scalable Backend Systems',
      description: 'Designing and building backend services that scale reliably under increasing load.',
      iconUrl: '/icons/focus-backend.svg'
    },
    {
      title: 'Distributed Architectures',
      description: 'Working with microservices and event-driven systems to build resilient applications.',
      iconUrl: '/icons/focus-distributed.svg'
    },
    {
      title: 'Clean & Maintainable Code',
      description: 'Writing code that is easy to understand, extend, and operate in production.',
      iconUrl: '/icons/focus-clean-code.svg'
    },
    {
      title: 'Product-Oriented Development',
      description: 'Translating business needs into practical and robust technical solutions.',
      iconUrl: '/icons/focus-product.svg'
    },
    {
      title: 'Performance & Efficiency',
      description: 'Continuously improving system performance and optimizing resource usage.',
      iconUrl: '/icons/focus-performance.svg'
    },
    {
      title: 'User-Centric Interfaces',
      description: 'Building intuitive and responsive interfaces with a strong focus on usability and user experience.',
      iconUrl: '/icons/focus-interface.svg'
    }
  ];
}
