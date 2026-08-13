export type ProjectEvidence = {
  label: string;
  url?: string;
  type: "demo" | "repo" | "docs" | "research" | "architecture";
};

export type TeamContribution = {
  role: string;
  contribution: string;
  skills: string[];
};

export type ShowcaseProject = {
  id: string;
  slug: string;
  title: string;
  domain: "AI" | "Data" | "Creative Technology" | "Cloud / Cyber" | "Smart Engineering";
  projectType: "Student Project" | "Challenge / Hackathon" | "Institutional Pilot" | "Industry Context" | "Research";
  problem: string;
  context: string;
  approach: string;
  output: string;
  feedbackSummary: string;
  iteration: string;
  outcome: string;
  contributions: TeamContribution[];
  capabilities: string[];
  technologies: string[];
  evidence: ProjectEvidence[];
  experienceSource: string;
  featured?: boolean;
};

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "proj-1",
    slug: "institutional-readiness-telemetry",
    title: "Institutional Readiness Telemetry Engine",
    domain: "Data",
    projectType: "Institutional Pilot",
    problem:
      "Traditional campus training programs fail to capture continuous skill growth, relying solely on subjective attendance and unverified multiple-choice test scores.",
    context:
      "Colleges need real-time, rubric-based observational telemetry to evaluate cohort engagement, peer collaboration, and technical execution quality.",
    approach:
      "Constructed an event-driven telemetry ingestion engine that aggregates mentor check-ins, sprint milestone submissions, and peer reviews into dynamic Industry Readiness Score visualizers.",
    output:
      "A multi-tenant institutional analytics console featuring real-time radar charts across 6 core readiness dimensions, student portfolio deep-dives, and automated governance reports.",
    feedbackSummary:
      "Institutional faculty and domain experts recommended simplifying rubric criteria weights and adding exportable institutional accreditation summaries.",
    iteration:
      "Refactored scoring calculations into modular weighted aggregators and added automated PDF export pipelines with verifiable tamper-proof hashes.",
    outcome:
      "Successfully tracked 100 pilot students across 4 sprint cycles with observable 38% improvement in timely deliverable submissions and structured peer reviews.",
    contributions: [
      {
        role: "Data & Telemetry Lead",
        contribution: "Designed data models, aggregation SQL queries, and sub-second calculation algorithms.",
        skills: ["PostgreSQL", "SQL Optimization", "Data Modeling"]
      },
      {
        role: "Full Stack Associate",
        contribution: "Built dashboard interface, authentication layer, and responsive metric cards.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        role: "UX Researcher",
        contribution: "Conducted usability tests with 4 department heads to streamline report navigation.",
        skills: ["Figma", "User Journey Mapping", "Usability Auditing"]
      }
    ],
    capabilities: [
      "Problem Solving",
      "Technical Execution",
      "Collaboration",
      "Iteration",
      "Professional Execution"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Recharts", "Supabase"],
    evidence: [
      { label: "Architecture Blueprint", type: "architecture" },
      { label: "Live System Demo", type: "demo" },
      { label: "System Documentation", type: "docs" }
    ],
    experienceSource: "4-Week Institutional Pilot Project Track",
    featured: true
  },
  {
    id: "proj-2",
    slug: "agentic-research-synthesizer",
    title: "Autonomous Knowledge Synthesizer & Triage",
    domain: "AI",
    projectType: "Student Project",
    problem:
      "Engineering teams spend hours manually scouring heterogeneous documentation, API references, and issue trackers to identify root causes for deployment regressions.",
    context:
      "Developers working on complex microservices need automated contextual knowledge retrieval with verifiable source citations and human validation safeguards.",
    approach:
      "Engineered an agentic LangChain workflow that vectorizes codebase documentation and executes multi-step reasoning to synthesize answers with confidence scores.",
    output:
      "A standalone developer co-pilot interface with streaming markdown responses, source document chunk visualizers, and audit logging.",
    feedbackSummary:
      "Domain experts pointed out token hallucination vulnerabilities on deeply nested error traces and advised adding explicit context bounding.",
    iteration:
      "Implemented a two-pass validation prompt guard with strict similarity score thresholding before generating final summaries.",
    outcome:
      "Reduced documentation search time by 60% in simulated engineering team onboarding sprints.",
    contributions: [
      {
        role: "AI Systems Engineer",
        contribution: "Configured vector embeddings, similarity search pipelines, and agent reasoning loop.",
        skills: ["Python", "LangChain", "Vector Embeddings", "OpenAI API"]
      },
      {
        role: "Frontend Engineer",
        contribution: "Implemented streaming token UI, markdown renderers, and citation sidebars.",
        skills: ["React", "TypeScript", "Server-Sent Events"]
      }
    ],
    capabilities: [
      "Research",
      "Problem Solving",
      "Technical Execution",
      "Communication"
    ],
    technologies: ["Python", "LangChain", "Qdrant", "Next.js", "FastAPI", "Tailwind CSS"],
    evidence: [
      { label: "GitHub Repository", type: "repo" },
      { label: "Technical ADR Documentation", type: "docs" }
    ],
    experienceSource: "Agentic Systems Hackathon & Residency Track",
    featured: true
  },
  {
    id: "proj-3",
    slug: "zero-trust-cloud-gateway",
    title: "Zero-Trust Infrastructure Access Gateway",
    domain: "Cloud / Cyber",
    projectType: "Industry Context",
    problem:
      "Static SSH credentials and perimeter-only firewalls expose distributed development environments to credential theft and lateral network movement.",
    context:
      "Modern cloud operations teams require identity-aware proxying with short-lived certificates and granular role-based access control.",
    approach:
      "Constructed a lightweight reverse-proxy access gateway that validates user identity via WebAuthn and issues 15-minute scoped cryptographic session tokens.",
    output:
      "A deployable Dockerized gateway container with integrated Prometheus metrics, automated TLS termination, and administrative audit logging.",
    feedbackSummary:
      "Practicing industry mentors recommended stress-testing concurrent session termination and hardening token revocation against replay attacks.",
    iteration:
      "Replaced in-memory token state with distributed Redis key-expiry caches and added cryptographically signed nonce validations.",
    outcome:
      "Demonstrated secure access proxying under simulated brute-force and token-replay penetration testing scenarios.",
    contributions: [
      {
        role: "Security & DevOps Lead",
        contribution: "Designed token lifecycle, TLS handshakes, and Redis revocation layers.",
        skills: ["Docker", "Linux Security", "Redis", "Cryptography"]
      },
      {
        role: "Infrastructure Associate",
        contribution: "Built automated Terraform scripts and CI/CD validation pipelines.",
        skills: ["Terraform", "GitHub Actions", "Bash"]
      }
    ],
    capabilities: [
      "Technical Execution",
      "Research",
      "Problem Solving",
      "Professional Execution"
    ],
    technologies: ["Go", "Docker", "Redis", "Prometheus", "Terraform", "Linux"],
    evidence: [
      { label: "Architecture Specification", type: "architecture" },
      { label: "Docker Deployment Compose", type: "repo" },
      { label: "Security Audit Report", type: "docs" }
    ],
    experienceSource: "Cyber Systems Residency Squad",
    featured: true
  },
  {
    id: "proj-4",
    slug: "smart-campus-energy-telemetry",
    title: "Edge-Assisted Smart Campus Energy Telemetry",
    domain: "Smart Engineering",
    projectType: "Student Project",
    problem:
      "Educational institutions lack granular real-time insight into electrical load distribution across labs and classrooms, leading to high baseline power wastage.",
    context:
      "Facility managers need cost-effective sensor nodes that monitor power spikes and operate reliably across low-bandwidth campus subnets.",
    approach:
      "Built custom ESP32 current-sensing nodes communicating over lightweight MQTT to a local gateway that aggregates metrics and flags abnormal usage patterns.",
    output:
      "A complete hardware-to-cloud telemetry loop featuring 3 deployed sensor prototypes and a live real-time dashboard displaying power consumption curves.",
    feedbackSummary:
      "Faculty advisors highlighted noise in analog current transformer readings during high-frequency AC switching.",
    iteration:
      "Added moving-average digital filtering in firmware and implemented Kalman filter estimation for stable baseline readings.",
    outcome:
      "Captured power draw data with 94% accuracy compared against calibrated industrial reference meters.",
    contributions: [
      {
        role: "Embedded Firmware Engineer",
        contribution: "Wrote ESP32 C++ firmware, MQTT pub/sub routines, and digital noise filters.",
        skills: ["C++", "FreeRTOS", "MQTT", "ESP32"]
      },
      {
        role: "Cloud & Dashboard Associate",
        contribution: "Configured Mosquitto MQTT broker and time-series Grafana dashboards.",
        skills: ["Grafana", "Node.js", "Time-Series DB"]
      }
    ],
    capabilities: [
      "Problem Solving",
      "Technical Execution",
      "Iteration",
      "Collaboration"
    ],
    technologies: ["C++", "ESP32", "MQTT", "Grafana", "Node.js", "KiCad"],
    evidence: [
      { label: "Firmware Source Code", type: "repo" },
      { label: "Hardware Schematics & PCB", type: "architecture" },
      { label: "Live Telemetry Dashboard", type: "demo" }
    ],
    experienceSource: "IoT Prototyping Challenge",
    featured: false
  },
  {
    id: "proj-5",
    slug: "accessible-design-system-core",
    title: "Accessible Enterprise Component System (WCAG AAA)",
    domain: "Creative Technology",
    projectType: "Research",
    problem:
      "Most enterprise dashboards fail accessibility standards for keyboard navigation, high-contrast modes, and screen reader compatibility.",
    context:
      "Product engineering teams struggle to build accessible interfaces quickly without dedicated accessibility design tokens.",
    approach:
      "Researched WCAG 2.2 AAA guidelines and created an accessible design system with tokenized color contrast ratios, focus rings, and ARIA announcement primitives.",
    output:
      "A documented Storybook library with 24 accessible UI components, contrast audit checkers, and interactive screen-reader testing sandboxes.",
    feedbackSummary:
      "UX mentors recommended adding motion-reduction fallbacks for vestibular disorder accessibility.",
    iteration:
      "Implemented `prefers-reduced-motion` media query tokens across all animated modals and layout transitions.",
    outcome:
      "Achieved 100% automated axe-core accessibility compliance score across all 24 components.",
    contributions: [
      {
        role: "Design Systems Lead",
        contribution: "Created Figma token architecture, contrast color scales, and accessibility specs.",
        skills: ["Figma", "Design Tokens", "WCAG 2.2"]
      },
      {
        role: "UI Engineer",
        contribution: "Developed Storybook components with custom keyboard focus traps and ARIA live regions.",
        skills: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Axe-core"]
      }
    ],
    capabilities: [
      "Research",
      "Communication",
      "Technical Execution",
      "Professional Execution"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma", "Axe-core"],
    evidence: [
      { label: "Interactive Storybook Demo", type: "demo" },
      { label: "Design Token Specification", type: "docs" }
    ],
    experienceSource: "Creative Technology Project Track",
    featured: false
  }
];
