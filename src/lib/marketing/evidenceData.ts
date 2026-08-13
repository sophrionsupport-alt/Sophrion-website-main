export type ReadinessDimension = {
  num: string;
  title: string;
  description: string;
  observableEvidence: string[];
};

export const READINESS_DIMENSIONS: ReadinessDimension[] = [
  {
    num: "01",
    title: "Discovery & Problem Understanding",
    description: "Ability to explore problem spaces, question assumptions, clarify constraints, and define user needs.",
    observableEvidence: [
      "Problem brief formulation",
      "Stakeholder questioning rigor",
      "Constraint identification",
      "Literature and prior art research"
    ]
  },
  {
    num: "02",
    title: "Learning & Application",
    description: "Ability to acquire new technical or conceptual knowledge rapidly and apply it directly to project challenges.",
    observableEvidence: [
      "Speed of tool/framework adoption",
      "Documentation comprehension",
      "Application of theory into code/design",
      "Independent technical exploration"
    ]
  },
  {
    num: "03",
    title: "Problem Solving & Adaptability",
    description: "Ability to navigate roadblocks, formulate hypotheses, test solutions, and pivot based on empirical feedback.",
    observableEvidence: [
      "Root cause troubleshooting",
      "Response to unexpected setbacks",
      "Algorithmic trade-off reasoning",
      "Refactoring under new requirements"
    ]
  },
  {
    num: "04",
    title: "Communication & Collaboration",
    description: "Clarity in asynchronous updates, technical discussions, peer coordination, and active listening.",
    observableEvidence: [
      "Sprint standup communication",
      "Peer code/design review quality",
      "Clarity in technical explanations",
      "Cross-functional team contribution"
    ]
  },
  {
    num: "05",
    title: "Professional Behaviour",
    description: "Accountability for deadlines, respect for team commitments, proactive ownership, and constructive engagement.",
    observableEvidence: [
      "Timely milestone delivery",
      "Sprint attendance & participation",
      "Constructive response to criticism",
      "Ethical data and system handling"
    ]
  },
  {
    num: "06",
    title: "Professional Execution & Expression",
    description: "Maturity of deliverables, code/design hygiene, architectural documentation, and live showcase defense.",
    observableEvidence: [
      "Architecture Decision Records (ADRs)",
      "Deployable repository standards",
      "Live prototype stability",
      "Showcase demonstration defense"
    ]
  }
];

export const OBSERVATION_DIMENSIONS = [
  { title: "Participation", desc: "Attendance consistency, active sprint engagement, and peer discussion involvement." },
  { title: "Learning", desc: "Knowledge acquisition velocity and direct integration into project systems." },
  { title: "Problem Solving", desc: "Logical reasoning, hypothesis testing, and navigation through technical ambiguity." },
  { title: "Collaboration", desc: "Constructive teamwork, role accountability, and cross-functional communication." },
  { title: "Execution", desc: "Converting conceptual specifications into working, deployable deliverables." },
  { title: "Adaptability", desc: "Receptive response to critique, pivoting designs, and recovering from setbacks." },
  { title: "Professional Behaviour", desc: "Deadline discipline, professional etiquette, and transparent communication." },
  { title: "Reflection", desc: "Ability to analyze what succeeded, identify failure modes, and articulate personal growth." }
];

export const EVIDENCE_SOURCES = [
  "Mentor sprint observations",
  "Faculty academic reviews",
  "Project repository contributions",
  "Milestone task completion",
  "Sprint standup discussions",
  "Live showcase presentations",
  "Domain expert code audits",
  "Industry perspective feedback",
  "Structured student reflections",
  "Platform activity telemetry"
];

export const INSTITUTIONAL_OUTPUTS = [
  { title: "Cohort Participation Metrics", desc: "Engagement consistency, sprint attendance, and active contribution distribution." },
  { title: "Student Development Assessment", desc: "Observable growth trends plotted across the 6 Industry Readiness dimensions." },
  { title: "Project Deliverables & Artifacts", desc: "Access to working prototypes, repositories, architecture maps, and demo recordings." },
  { title: "Faculty Observation Syntheses", desc: "Academic perspective connecting active learning with institutional curriculum." },
  { title: "Industry & Expert Feedback", desc: "External review commentary assessing real-world standard alignment." },
  { title: "Strategic Recommendations", desc: "Actionable institutional insights for curriculum enrichment and cohort progression." }
];
