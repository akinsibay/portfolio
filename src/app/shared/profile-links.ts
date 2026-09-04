export interface ProfileLink {
  label: string;
  href: string;
  iconSlug: string;
  iconUrl?: string;
  external?: boolean;
}

/* Shared so the hero and the footer never drift apart. */
export const PROFILE_LINKS: ProfileLink[] = [
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

/* The footer repeats the ways to reach out; the CV already lives in the nav and the hero. */
export const CONTACT_LINKS: ProfileLink[] = PROFILE_LINKS.filter((link) => link.label !== 'Download CV');

export function profileIconUrl(slug: string, fallbackUrl?: string): string {
  if (fallbackUrl) {
    return fallbackUrl;
  }

  return `https://cdn.simpleicons.org/${slug}/8bb8df`;
}
