export type CommunityMemberType = {
  title: string;
  role: string;
  description: string;
  accent: "purple" | "cyan" | "blue" | "indigo" | "emerald";
};

export type ParticipationMode = {
  title: string;
  verb: string;
  description: string;
};

export type CommunityPrinciple = {
  title: string;
  description: string;
};

export const COMMUNITY_MEMBERS: CommunityMemberType[] = [
  {
    title: "STUDENTS",
    role: "Explorers & Builders",
    description: "Explore multidisciplinary domains, build active projects, collaborate in squads, and share discovery insights.",
    accent: "cyan"
  },
  {
    title: "MENTORS",
    role: "Guides & Facilitators",
    description: "Guide learners through sprint roadblocks, foster self-reliant questioning, and monitor daily progress.",
    accent: "purple"
  },
  {
    title: "DOMAIN EXPERTS",
    role: "Architects & Specialists",
    description: "Contribute deep technical critique, architecture design discussions, and conceptual domain clarity.",
    accent: "blue"
  },
  {
    title: "FACULTY",
    role: "Institutional Partners",
    description: "Connect active project execution with academic theory, student observation, and curriculum alignment.",
    accent: "indigo"
  },
  {
    title: "INDUSTRY",
    role: "Practitioners & Reviewers",
    description: "Bring real-world problem statements, production execution standards, and milestone feedback.",
    accent: "emerald"
  },
  {
    title: "CONTRIBUTORS",
    role: "Knowledge Sharers",
    description: "Share open-source tooling, learning resources, career experiences, and domain-adjacent insights.",
    accent: "purple"
  }
];

export const WHAT_PEOPLE_SHARE = [
  {
    title: "Knowledge",
    description: "Tools, system concepts, documentation resources, and active learning frameworks."
  },
  {
    title: "Experience",
    description: "Lessons learned from production systems, career transitions, failures, and technical experiments."
  },
  {
    title: "Problems",
    description: "Authentic problem statements that require multidisciplinary skills, discovery, and collaboration."
  },
  {
    title: "Feedback",
    description: "Constructive architectural critiques and milestone reviews that help teams improve their deliverables."
  },
  {
    title: "Opportunities",
    description: "Collaborative projects, hackathons, open research tracks, and ecosystem events."
  },
  {
    title: "Contributions",
    description: "Mentoring squads, conducting architecture audits, sharing code templates, and unblocking peers."
  }
];

export const PARTICIPATION_MODES: ParticipationMode[] = [
  {
    title: "LEARN",
    verb: "Attend & Explore",
    description: "Participate in workshops, ask deep questions, and explore emerging technical domains."
  },
  {
    title: "BUILD",
    verb: "Execute & Ship",
    description: "Collaborate in squads on multi-week projects, challenges, and deployable systems."
  },
  {
    title: "MENTOR",
    verb: "Guide & Support",
    description: "Support emerging learners with sprint check-ins, blocker triage, and problem framing."
  },
  {
    title: "CONTRIBUTE",
    verb: "Share & Enrich",
    description: "Contribute reusable boilerplates, documentation guides, and literature references."
  },
  {
    title: "REVIEW",
    verb: "Critique & Refine",
    description: "Provide constructive milestone reviews, code hygiene feedback, and architecture audits."
  },
  {
    title: "CONNECT",
    verb: "Collaborate & Partner",
    description: "Form multidisciplinary teams and establish bridges across academic and industry domains."
  }
];

export const COMMUNITY_PRINCIPLES: CommunityPrinciple[] = [
  {
    title: "Respect",
    description: "Different backgrounds, skill baselines, and perspectives are valuable to collective growth."
  },
  {
    title: "Curiosity",
    description: "Questions are welcomed. Inquiring into 'why' and 'how' drives deeper active learning."
  },
  {
    title: "Contribution",
    description: "Take value from discussions, but also contribute insights, feedback, and help to peers."
  },
  {
    title: "Evidence",
    description: "Share what you know and distinguish empirical experience from unsubstantiated assumption."
  },
  {
    title: "Accountability",
    description: "Honor squad commitments, meet agreed sprint milestones, and communicate clearly."
  },
  {
    title: "Trust & Ethics",
    description: "Protect confidential stakeholder information, respect privacy, and maintain system integrity."
  }
];
