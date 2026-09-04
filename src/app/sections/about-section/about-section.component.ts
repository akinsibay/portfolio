import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE_LINKS, profileIconUrl } from '../../shared/profile-links';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  protected readonly profileImage = '/profile.webp';
  protected readonly links = PROFILE_LINKS;

  protected iconUrl(slug: string, fallbackUrl?: string): string {
    return profileIconUrl(slug, fallbackUrl);
  }
}
