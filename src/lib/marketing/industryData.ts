export type IndustryBenefit = {
  title: string;
  subtitle: string;
  description: string;
};

export type IndustryParticipationMode = {
  num: string;
  title: string;
  description: string;
};

export type EngagementLevel = {
  level: "LIGHT" | "ACTIVE" | "DEEP";
  title: string;
  subtitle: string;
  activities: string[];
  commitment: string;
  accent: "purple" | "cyan" | "emerald";
};

export const INDUSTRY_BENEFITS: IndustryBenefit[] = [
  {
    title: "SHARE EXPERTISE",
    subtitle: "High-Impact Knowledge Sharing",
    description: "Help learners understand how modern engineering and product teams think, make trade-offs, and execute."
  },
  {
    title: "BRING PROBLEMS",
    subtitle: "Real-World Learning Context",
    description: "Introduce meaningful technical or operational problems that can become active learning and exploration opportunities."
  },
  {
    title: "REVIEW PROJECTS",
    subtitle: "Production Hygiene Feedback",
    description: "Provide constructive architectural critique and feedback on student prototypes, code hygiene, and professional readiness."
  },
  {
    title: "OBSERVE TALENT",
    subtitle: "Observed Proof-of-Work",
    description: "Interact with emerging builders through demonstrated problem solving and sprint execution rather than unverified resumes."
  },
  {
    title: "CREATE OPPORTUNITIES",
    subtitle: "Ecosystem Bridges",
    description: "Where appropriate, enable project tracks, internships, or applied collaborations without speculative placement promises."
  }
];

export const INDUSTRY_MODES: IndustryParticipationMode[] = [
  {
    num: "01",
    title: "Industry Sessions",
    description: "Share professional knowledge, architectural paradigms, operational hygiene, and industry perspectives."
  },
  {
    num: "02",
    title: "Expert Reviews",
    description: "Critique student project prototypes, system designs, and code repositories during sprint milestones."
  },
  {
    num: "03",
    title: "Problem Statements",
    description: "Provide structured, relevant technical or domain challenges for student squad exploration."
  },
  {
    num: "04",
    title: "Project Collaboration",
    description: "Participate in suitable educational or applied projects aligned with emerging domain tracks."
  },
  {
    num: "05",
    title: "Requirement Discussions",
    description: "Help student squads understand how real-world requirements, edge cases, and constraints are defined."
  },
  {
    num: "06",
    title: "Feedback & Defense",
    description: "Provide rigorous professional feedback on project decisions, communication clarity, and presentation defense."
  },
  {
    num: "07",
    title: "Mentorship",
    description: "Contribute recurring domain guidance during multi-week project sprints where appropriate."
  },
  {
    num: "08",
    title: "Ecosystem Opportunities",
    description: "Where suitable, introduce advanced projects, internships, or applied collaboration opportunities."
  }
];

export const ENGAGEMENT_LEVELS: EngagementLevel[] = [
  {
    level: "LIGHT",
    title: "Expert Interaction",
    subtitle: "Low Friction, High Impact",
    activities: [
      "Guest technical talks & seminars",
      "Interactive Q&A & perspective sessions",
      "Sharing real-world industry case studies",
      "No ongoing operational commitment"
    ],
    commitment: "1–2 Hours",
    accent: "purple"
  },
  {
    level: "ACTIVE",
    title: "Project Review & Feedback",
    subtitle: "Milestone-Driven Engagement",
    activities: [
      "Curated problem statement submission",
      "Mid-sprint architectural critique",
      "Showcase panel evaluation",
      "Direct feedback on student proof-of-work"
    ],
    commitment: "3–6 Hours per Cohort",
    accent: "cyan"
  },
  {
    level: "DEEP",
    title: "Project / Residency Track",
    subtitle: "Sustained Execution Collaboration",
    activities: [
      "Dedicated multi-week project challenge",
      "Weekly or bi-weekly review checkpoints",
      "Sustained residency squad engagement",
      "Separately scoped commercial SOW where applicable"
    ],
    commitment: "Sustained Multi-Week Track",
    accent: "emerald"
  }
];

export const ORCHESTRATION_SOPHRION = [
  "Student cohort coordination & scheduling",
  "Problem statement educational curation",
  "Multidisciplinary squad team formation",
  "Junior mentor allocation & daily check-ins",
  "Domain expert session orchestration",
  "Milestone review logistics & calendar management",
  "Continuous Industry Readiness assessment",
  "Institutional administration & governance",
  "Comprehensive post-cohort impact reporting"
];

export const ORCHESTRATION_INDUSTRY = [
  "Domain expertise & architectural insight",
  "Real-world problem briefs & context",
  "Constructive feedback on student deliverables",
  "Professional standards & operational hygiene",
  "Ecosystem opportunities where suitable"
];
