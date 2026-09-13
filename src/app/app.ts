import { Component } from '@angular/core';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ExpertiseSectionComponent } from './sections/expertise-section/expertise-section.component';
import { FocusSectionComponent } from './sections/focus-section/focus-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { CONTACT_LINKS, profileIconUrl } from './shared/profile-links';

@Component({
  selector: 'app-root',
  imports: [
    SiteNavComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    FocusSectionComponent,
    ExpertiseSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly contactLinks = CONTACT_LINKS;

  protected iconUrl(slug: string, fallbackUrl?: string): string {
    return profileIconUrl(slug, fallbackUrl);
  }
}
