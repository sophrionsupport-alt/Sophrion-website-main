export type FaqItem = {
  id: string;
  category:
    | "general"
    | "students"
    | "institutions"
    | "experiences"
    | "projects"
    | "industry"
    | "assessment"
    | "mentors"
    | "residency"
    | "transparency";
  question: string;
  answer: string;
  featured?: boolean;
  relatedRoute?: string;
};

export const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "students", label: "Students" },
  { id: "institutions", label: "Institutions & Pilot" },
  { id: "experiences", label: "Learning & Experiences" },
  { id: "projects", label: "Projects" },
  { id: "industry", label: "Industry" },
  { id: "assessment", label: "Assessment & Certificates" },
  { id: "mentors", label: "Mentors & Experts" },
  { id: "residency", label: "Residency" },
  { id: "transparency", label: "Transparency & Scope" },
] as const;

export const ALL_FAQS: FaqItem[] = [
  // ─── GENERAL ───
  {
    id: "gen-1",
    category: "general",
    question: "What is Sophrion?",
    answer:
      "Sophrion is an Industry-Integrated Active Learning Ecosystem connecting learners with people, problems, knowledge, projects, industry, communities and feedback.",
    featured: true,
    relatedRoute: "/about",
  },
  {
    id: "gen-2",
    category: "general",
    question: "What does \"Future Within\" mean?",
    answer:
      "Future Within represents the belief that future capability is developed through experiences, learning, reflection, collaboration and continuous growth.",
    featured: true,
  },
  {
    id: "gen-3",
    category: "general",
    question: "Is Sophrion a training company?",
    answer:
      "Sophrion is not limited to training sessions. It creates an ecosystem that connects learning with projects, people, feedback, industry and opportunities.",
    featured: true,
  },
  {
    id: "gen-4",
    category: "general",
    question: "Is Sophrion an EdTech platform?",
    answer:
      "Technology is part of the Sophrion ecosystem, but Sophrion is broader than a content or learning platform. The model combines people, experiences, projects, expertise, industry and assessment.",
  },
  {
    id: "gen-5",
    category: "general",
    question: "Does Sophrion focus only on AI?",
    answer:
      "No. AI is one important domain within Sophrion. Learners can explore multiple domains including data, cloud, cybersecurity, creative technology, robotics, automation and other emerging areas.",
    relatedRoute: "/pathways",
  },

  // ─── STUDENTS ───
  {
    id: "stu-1",
    category: "students",
    question: "Who can participate?",
    answer:
      "Participation depends on the specific Sophrion program. Institutional pilots use an agreed nomination and selection process.",
  },
  {
    id: "stu-2",
    category: "students",
    question: "How are students selected?",
    answer:
      "Students may be nominated by the institution and selected using factors such as commitment, availability, interests, learning orientation, collaboration and relevant capability.",
  },
  {
    id: "stu-3",
    category: "students",
    question: "Do students need to already be highly skilled?",
    answer:
      "No. Sophrion is designed as a development environment. Existing capability is considered, but curiosity, commitment and willingness to learn are also important.",
  },
  {
    id: "stu-4",
    category: "students",
    question: "Do students need to know exactly what they want to pursue?",
    answer:
      "No. Students may explore domains and problems as their interests develop.",
  },
  {
    id: "stu-5",
    category: "students",
    question: "Are students assigned fixed career tracks?",
    answer:
      "No. Sophrion pathways are designed as exploration environments. Learners may explore, combine and revisit domains as their experiences evolve.",
    relatedRoute: "/pathways",
  },
  {
    id: "stu-6",
    category: "students",
    question: "How much time does a program require?",
    answer:
      "The standard institutional pilot is designed around approximately 15–18 student hours per week. Exact scheduling depends on the institution and agreed program structure.",
    relatedRoute: "/institutional-pilot",
  },

  // ─── LEARNING & EXPERIENCES ───
  {
    id: "exp-1",
    category: "experiences",
    question: "Is Sophrion just a series of workshops?",
    answer:
      "No. Workshops are one type of experience. Sophrion also uses challenges, hackathons, projects, mentoring, expert interactions, industry exposure, residency and showcase experiences.",
    relatedRoute: "/experiences",
  },
  {
    id: "exp-2",
    category: "experiences",
    question: "What happens after a workshop?",
    answer:
      "A workshop may lead into further exploration, a challenge, project work, mentorship or another Sophrion experience depending on the student's interests and opportunities.",
  },
  {
    id: "exp-3",
    category: "experiences",
    question: "Is there a fixed sequence that every student follows?",
    answer:
      "No. The ecosystem has structure, but learner pathways can evolve based on interests, projects, capabilities and opportunities.",
  },
  {
    id: "exp-4",
    category: "experiences",
    question: "What do students actually build?",
    answer:
      "Depending on the program and project, students may produce prototypes, software, research, designs, analyses, systems, documentation or other tangible project outcomes.",
  },

  // ─── PROJECTS ───
  {
    id: "proj-1",
    category: "projects",
    question: "How are projects selected?",
    answer:
      "Projects may originate from students, faculty, institutions, industry or clients. Sophrion helps curate and structure them based on relevance, feasibility and available support.",
  },
  {
    id: "proj-2",
    category: "projects",
    question: "How are teams formed?",
    answer:
      "Teams may form around meaningful problems, complementary capabilities, student interests and project requirements.",
  },
  {
    id: "proj-3",
    category: "projects",
    question: "Are teams fixed from the beginning?",
    answer:
      "Not necessarily. Team structures may evolve when evidence shows that a change would improve project execution or learning.",
  },
  {
    id: "proj-4",
    category: "projects",
    question: "What if a project fails?",
    answer:
      "A project does not have to succeed technically to produce a successful learning outcome. Discovery, reasoning, iteration, feedback and evidence of development also matter.",
  },

  // ─── INDUSTRY ───
  {
    id: "ind-1",
    category: "industry",
    question: "Does Sophrion guarantee industry projects?",
    answer:
      "No. Industry and client opportunities depend on suitability, availability, approval and agreed scope.",
    featured: true,
  },
  {
    id: "ind-2",
    category: "industry",
    question: "Does Sophrion guarantee internships?",
    answer:
      "No. Sophrion provides industry exposure, projects, mentoring and opportunities where available. Internship outcomes depend on external opportunities and eligibility.",
    featured: true,
  },
  {
    id: "ind-3",
    category: "industry",
    question: "Does Sophrion guarantee placements?",
    answer:
      "No. Sophrion is designed to develop and demonstrate capability; it does not guarantee employment.",
    featured: true,
  },
  {
    id: "ind-4",
    category: "industry",
    question: "How does industry participate?",
    answer:
      "Industry professionals may contribute through seminars, expert interactions, project reviews, requirement discussions, feedback and suitable project opportunities.",
  },

  // ─── INSTITUTIONS & PILOT ───
  {
    id: "inst-1",
    category: "institutions",
    question: "Does Sophrion replace the college curriculum?",
    answer:
      "No. Sophrion is designed to operate alongside the institution's academic environment and add an industry-integrated active learning layer.",
    featured: true,
    relatedRoute: "/institutions",
  },
  {
    id: "inst-2",
    category: "institutions",
    question: "What does the college provide?",
    answer:
      "The institution provides the operating environment, including students, agreed timetable access, faculty participation, infrastructure, coordination and institutional approvals.",
  },
  {
    id: "inst-3",
    category: "institutions",
    question: "What does Sophrion provide?",
    answer:
      "Sophrion provides program architecture, cohort leadership, mentors, experts, project infrastructure, industry interactions, assessment, certification and institutional reporting within the agreed scope.",
  },
  {
    id: "inst-4",
    category: "institutions",
    question: "What is the standard institutional pilot?",
    answer:
      "The standard pilot is approximately 100 students over four weeks, with 15–18 hours of weekly engagement and an adaptive project ecosystem.",
    relatedRoute: "/institutional-pilot",
  },
  {
    id: "inst-5",
    category: "institutions",
    question: "What does the standard pilot include?",
    answer:
      "The recommended pilot includes structured workshops, expert interactions, industry exposure, mentoring, projects, continuous assessment, Industry Readiness measurement, certification, final showcase and institutional reporting.",
  },
  {
    id: "inst-6",
    category: "institutions",
    question: "What does the pilot cost?",
    answer:
      "The recommended Standard pilot is ₹1,25,000 for approximately 100 students over four weeks, plus applicable statutory taxes and subject to the final Statement of Work.",
  },
  {
    id: "inst-7",
    category: "institutions",
    question: "How is the pilot evaluated?",
    answer:
      "Through participation, project evidence, mentor observations, faculty observations where agreed, expert/industry feedback where applicable, continuous assessment and institutional review.",
  },
  {
    id: "inst-8",
    category: "institutions",
    question: "Why should an institution start with a pilot?",
    answer:
      "A pilot allows the institution to evaluate the Sophrion operating model, student engagement, project outcomes and development evidence before committing to a longer partnership.",
  },
  {
    id: "inst-9",
    category: "institutions",
    question: "What happens after the pilot?",
    answer:
      "The institution and Sophrion review the evidence and may continue, modify or expand the relationship. A possible next stage is a separately scoped 4–6 month Industry Internship / Cohort.",
  },

  // ─── ASSESSMENT & CERTIFICATION ───
  {
    id: "ass-1",
    category: "assessment",
    question: "How are students assessed?",
    answer:
      "Sophrion uses continuous evidence rather than relying only on a final examination. Evidence may include participation, project contribution, mentor observations, faculty observations, presentations, expert reviews, industry feedback, reflection, and response to feedback.",
  },
  {
    id: "ass-2",
    category: "assessment",
    question: "What is the Industry Readiness Score?",
    answer:
      "It is an evidence-based development measure used to understand student growth during the program.",
  },
  {
    id: "ass-3",
    category: "assessment",
    question: "What does the score measure?",
    answer:
      "It measures six core development dimensions: 1) Discovery & Problem Understanding, 2) Learning & Application, 3) Problem Solving & Adaptability, 4) Communication & Collaboration, 5) Professional Behaviour, and 6) Professional Execution & Expression.",
  },
  {
    id: "ass-4",
    category: "assessment",
    question: "Is the Industry Readiness Score an academic grade?",
    answer:
      "No. It is a Sophrion development measure and does not replace institutional academic evaluation.",
  },
  {
    id: "ass-5",
    category: "assessment",
    question: "Do students receive certificates?",
    answer:
      "Eligible participating students may receive the Sophrion Industry Readiness Certificate and applicable activity credentials.",
  },
  {
    id: "ass-6",
    category: "assessment",
    question: "Does the certificate guarantee employment?",
    answer:
      "No. The certificate documents participation and/or demonstrated development within the agreed Sophrion program. It does not guarantee employment.",
  },
  {
    id: "ass-7",
    category: "assessment",
    question: "Can the college co-certify students?",
    answer:
      "Co-certification can be considered separately and must be agreed with the institution.",
  },

  // ─── MENTORS & EXPERTS ───
  {
    id: "men-1",
    category: "mentors",
    question: "Who are the mentors?",
    answer:
      "Sophrion uses a distributed support model including junior mentors, domain experts, industry professionals and community contributors where appropriate.",
  },
  {
    id: "men-2",
    category: "mentors",
    question: "What does a junior mentor do?",
    answer:
      "Provides recurring guidance, monitors progress, helps students identify blockers and escalates deeper issues.",
  },
  {
    id: "men-3",
    category: "mentors",
    question: "What does a domain expert do?",
    answer:
      "Provides deeper technical or conceptual guidance when a project or learner requires specialist support.",
  },
  {
    id: "men-4",
    category: "mentors",
    question: "What does an industry professional do?",
    answer:
      "Provides professional context, industry perspective, feedback and insight into how problems are approached outside academic environments.",
  },

  // ─── RESIDENCY ───
  {
    id: "res-1",
    category: "residency",
    question: "What is Sophrion Residency?",
    answer:
      "Residency is a deeper execution environment where learners work on longer project cycles with sustained mentorship, collaboration, expertise and industry context.",
    relatedRoute: "/residency",
  },
  {
    id: "res-2",
    category: "residency",
    question: "Is Residency a startup incubator?",
    answer:
      "Not necessarily. Entrepreneurship can be one direction, but Residency is broader and is designed around sustained execution and learning.",
  },

  // ─── TRANSPARENCY & GUARANTEES ───
  {
    id: "trans-1",
    category: "transparency",
    question: "What does Sophrion guarantee?",
    answer:
      "Sophrion guarantees the agreed program structure, operating framework and delivery responsibilities defined in the applicable agreement.",
  },
  {
    id: "trans-2",
    category: "transparency",
    question: "What does Sophrion not guarantee?",
    answer:
      "Sophrion does not guarantee placements, internships, startups, investment, commercialization, client adoption, specific external participants, or identical outcomes for every student.",
  },
  {
    id: "trans-3",
    category: "transparency",
    question: "What happens if an external expert becomes unavailable?",
    answer:
      "Sophrion may provide a reasonable substitute interaction with comparable educational purpose, subject to practical availability.",
  },
];
