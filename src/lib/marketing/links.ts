/** Public marketing routes — keep nav/footer/CTAs in sync with the site IA. */
export const MARKETING = {
  home: "/",
  about: "/about",
  ecosystem: "/ecosystem",
  experiences: "/experiences",
  pathways: "/pathways",
  residency: "/residency",
  projects: "/projects",
  mentors: "/mentors",
  community: "/community",
  industry: "/industry",
  institutions: "/institutions",
  institutionalPilot: "/institutional-pilot",
  evidence: "/evidence",
  faq: "/faq",
  contact: "/contact",
  join: "/join",
  privacy: "/privacy",
  terms: "/terms",
  blog: "/blog",
  institutionsBrochure: "/api/public/institutions/brochure",
} as const;

export const PATHWAY_ANCHORS = {
  ai: "/pathways#pathway-ai-systems",
  data: "/pathways#pathway-data-intelligence",
  creative: "/pathways#pathway-creative-ai",
  cloud: "/pathways#pathway-cloud-cyber",
  engineering: "/pathways#pathway-smart-engineering",
} as const;
