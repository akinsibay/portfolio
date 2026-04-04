import { Component } from '@angular/core';

interface AboutLink {
  label: string;
  href: string;
  iconSlug: string;
  iconUrl?: string;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  protected readonly profileImage = '/profile.png';
  protected readonly links: AboutLink[] = [
    { label: 'GitHub', href: 'https://github.com/akinsibay', iconSlug: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akinsibay/',
      iconSlug: 'linkedin',
      iconUrl: '/icons/linkedin.svg'
    },
    {
      label: 'Mail',
      href: 'mailto:sibayakin@gmail.com',
      iconSlug: 'mail',
      iconUrl: '/icons/mail.svg'
    }
  ];

  protected iconUrl(slug: string, fallbackUrl?: string): string {
    if (fallbackUrl) {
      return fallbackUrl;
    }

    return `https://cdn.simpleicons.org/${slug}/8bb8df`;
  }
}
