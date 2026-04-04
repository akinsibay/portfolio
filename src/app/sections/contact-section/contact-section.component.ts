import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  href: string;
  iconSlug: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  protected readonly links: ContactLink[] = [
    { label: 'GitHub', href: 'https://github.com/akinsibay', iconSlug: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akinsibay/', iconSlug: 'linkedin' }
  ];

  protected iconUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}/8bb8df`;
  }
}
