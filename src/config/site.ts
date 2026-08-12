export const SITE = {
  name: 'SPEOC',
  title: 'Security, Privacy, Engineered for Operational Continuity',
  description:
    'Enterprise cybersecurity and privacy governance consulting for executive boards and security leaders.',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://speoc.com',
  twitterHandle: '@speoc',
  socials: {
    twitter: 'https://twitter.com/speoc',
    github: 'https://github.com/Welland-speoc',
    linkedin: 'https://www.linkedin.com/company/speoc',
  },
} as const;

export type SiteConfig = typeof SITE;
