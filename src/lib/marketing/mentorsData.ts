export type MentorType =
  | "junior-mentor"
  | "domain-expert"
  | "industry-expert"
  | "faculty"
  | "community";

export type MentorTier = {
  id: string;
  type: MentorType;
  title: string;
  subtitle: string;
  roleDescription: string;
  responsibilities: string[];
  pedagogyQuote: string;
  accent: "purple" | "cyan" | "blue" | "indigo" | "emerald";
};

export const MENTOR_TIERS: MentorTier[] = [
  {
    id: "junior-mentors",
    type: "junior-mentor",
    title: "Junior Mentors",
    subtitle: "Immediate Support & Sprint Check-ins",
    roleDescription:
      "Provides day-to-day guidance, basic problem-solving support, progress monitoring, and question framing for student squads.",
    responsibilities: [
      "Daily/weekly sprint check-ins and progress tracking",
      "Unblocking implementation hurdles & environment setup",
      "Facilitating structured squad discussions",
      "Resource suggestions & documentation references",
      "Early escalation of complex blockers to domain experts"
    ],
    pedagogyQuote: "Encourage students to: Try → Think → Search → Discuss → Ask",
    accent: "purple"
  },
  {
    id: "domain-experts",
    type: "domain-expert",
    title: "Domain Experts",
    subtitle: "Technical & Conceptual Depth",
    roleDescription:
      "Contributes specialist knowledge when a project or learner requires deep architectural critique, algorithmic rigor, or conceptual clarification.",
    responsibilities: [
      "Deep technical guidance & architectural reviews",
      "Clarifying advanced domain concepts & trade-offs",
      "Evaluating solution scalability & algorithm efficiency",
      "Challenging technical assumptions and edge cases",
      "Recommending advanced research literature & tools"
    ],
    pedagogyQuote: "Specialist depth when the project milestone demands it.",
    accent: "cyan"
  },
  {
    id: "industry-professionals",
    type: "industry-expert",
    title: "Industry Professionals",
    subtitle: "Professional Context & Execution Standards",
    roleDescription:
      "Exposes students to real-world engineering hygiene, professional workflows, and decision-making frameworks used in production teams.",
    responsibilities: [
      "Sharing production hygiene and operational standards",
      "Conducting realistic requirement framing & scope reviews",
      "Providing constructive feedback on deliverables & demos",
      "Professional communication and engineering trade-offs",
      "Broadening awareness of industry career trajectories"
    ],
    pedagogyQuote: "Their role is not to teach a syllabus, but to expose how professionals think, decide and execute.",
    accent: "blue"
  },
  {
    id: "faculty-partners",
    type: "faculty",
    title: "Faculty",
    subtitle: "Institutional Learning Partners",
    roleDescription:
      "Collaborates as academic partners, providing curriculum alignment, student observations, and institutional domain continuity.",
    responsibilities: [
      "Connecting active learning with academic theory",
      "Observing student progress and collaboration rubrics",
      "Institutional domain mentoring and project guidance",
      "Participating in final showcase panels & evaluations",
      "Reviewing cohort development reports"
    ],
    pedagogyQuote: "Integral partners bridging academic rigor with practical execution.",
    accent: "indigo"
  },
  {
    id: "community-contributors",
    type: "community",
    title: "Community Contributors",
    subtitle: "Distributed Knowledge & Peer Learning",
    roleDescription:
      "Broadens the learning environment through shared experiences, domain-adjacent problem solving, and peer exchange.",
    responsibilities: [
      "Sharing real-world transition & project stories",
      "Peer code reviews & feedback exchanges",
      "Recommending open-source tools & community resources",
      "Encouraging cross-institutional collaboration"
    ],
    pedagogyQuote: "Peer learning and distributed collective insight.",
    accent: "emerald"
  }
];
