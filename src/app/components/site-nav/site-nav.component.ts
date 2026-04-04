import { Component } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  isCta?: boolean;
}

@Component({
  selector: 'app-site-nav',
  standalone: true,
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss'
})
export class SiteNavComponent {
  protected readonly navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Focus', href: '#focus' },
    { label: 'Technologies', href: '#expertise' }
  ];
}
