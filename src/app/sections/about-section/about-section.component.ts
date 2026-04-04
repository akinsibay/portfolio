import { Component } from '@angular/core';

interface AboutLink {
  label: string;
  href: string;
  iconSlug: string;
  iconUrl?: string;
  external?: boolean;
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
    { label: 'GitHub', href: 'https://github.com/akinsibay', iconSlug: 'github', external: true },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akinsibay/',
      iconSlug: 'linkedin',
      iconUrl: '/icons/linkedin.svg',
      external: true
    },
    {
      label: 'Mail',
      href: 'mailto:sibayakin@gmail.com',
      iconSlug: 'mail',
      iconUrl: '/icons/mail.svg'
    },
    {
      label: 'Download CV',
      href: '/resume.html',
      iconSlug: 'resume',
      iconUrl: '/icons/resume.svg',
      external: true
    }
  ];

  protected iconUrl(slug: string, fallbackUrl?: string): string {
    if (fallbackUrl) {
      return fallbackUrl;
    }

    return `https://cdn.simpleicons.org/${slug}/8bb8df`;
  }
}
