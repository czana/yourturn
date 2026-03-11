const avatar = (seed) => `https://i.pravatar.cc/80?u=${seed}`

export const MOCK_CASES = [
  {
    id: "1",
    title: "E-commerce platform for BrightRetail",
    status: "your_turn",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Laura Bright", avatarUrl: avatar("laura-bright") },
      { name: "Kasia Nowak", avatarUrl: avatar("kasia-nowak") },
      { name: "Piotr Zieliński", avatarUrl: avatar("piotr-z") },
    ],
    currentStep: "Send revised cost estimation to client",
    assignee: "Tom Czana",
    updatedAt: new Date("2026-03-10"),
    timeline: [
      {
        id: "1a", date: new Date("2026-02-10"), actor: "Laura Bright", avatarUrl: avatar("laura-bright"),
        action: "Submitted initial project brief and requirements",
        comments: [
          { id: "c1a1", actor: "Laura Bright", avatarUrl: avatar("laura-bright"), date: new Date("2026-02-10"), text: "Here's the full brief with all functional requirements attached.", files: [{ name: "BrightRetail_Brief_v1.pdf", url: "#" }] },
        ],
      },
      { id: "1b", date: new Date("2026-02-14"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Reviewed brief and scheduled discovery call" },
      {
        id: "1c", date: new Date("2026-02-18"), actor: "Kasia Nowak", avatarUrl: avatar("kasia-nowak"),
        action: "Prepared technical feasibility assessment",
        comments: [
          { id: "c1c1", actor: "Kasia Nowak", avatarUrl: avatar("kasia-nowak"), date: new Date("2026-02-18"), text: "Assessment attached. Main risk is the payment gateway integration — might need 2 extra sprints.", files: [{ name: "Tech_Feasibility_BrightRetail.pdf", url: "#" }] },
          { id: "c1c2", actor: "Tom Czana", avatarUrl: avatar("czana"), date: new Date("2026-02-19"), text: "Good catch. Let's flag this to the client during the next call." },
        ],
      },
      {
        id: "1d", date: new Date("2026-02-25"), actor: "Piotr Zieliński", avatarUrl: avatar("piotr-z"),
        action: "Delivered initial wireframes for review",
        comments: [
          { id: "c1d1", actor: "Piotr Zieliński", avatarUrl: avatar("piotr-z"), date: new Date("2026-02-25"), text: "Wireframes for all key screens. Let me know if the checkout flow works for you.", files: [{ name: "Wireframes_v1.fig", url: "#" }, { name: "Wireframes_Export.pdf", url: "#" }] },
        ],
      },
      { id: "1e", date: new Date("2026-03-02"), actor: "Laura Bright", avatarUrl: avatar("laura-bright"), action: "Approved wireframes with minor feedback" },
      {
        id: "1f", date: new Date("2026-03-05"), actor: "Kasia Nowak", avatarUrl: avatar("kasia-nowak"),
        action: "Sent first cost estimation",
        comments: [
          { id: "c1f1", actor: "Kasia Nowak", avatarUrl: avatar("kasia-nowak"), date: new Date("2026-03-05"), text: "Estimation based on the approved wireframes and current scope.", files: [{ name: "Estimation_BrightRetail_v1.xlsx", url: "#" }] },
        ],
      },
      {
        id: "1g", date: new Date("2026-03-08"), actor: "Laura Bright", avatarUrl: avatar("laura-bright"),
        action: "Requested scope reduction on payment module",
        comments: [
          { id: "c1g1", actor: "Laura Bright", avatarUrl: avatar("laura-bright"), date: new Date("2026-03-08"), text: "The budget doesn't cover the full payment module. Can we start with Stripe only and add others in phase 2?" },
        ],
      },
      { id: "1h", date: new Date("2026-03-10"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Needs to send revised cost estimation", pending: true },
    ],
  },
  {
    id: "2",
    title: "NDA with Finovo",
    status: "your_turn",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Marco Rossi", avatarUrl: avatar("marco-rossi") },
    ],
    currentStep: "Review and sign the NDA",
    assignee: "Tom Czana",
    updatedAt: new Date("2026-03-09"),
    timeline: [
      {
        id: "2a", date: new Date("2026-03-03"), actor: "Marco Rossi", avatarUrl: avatar("marco-rossi"),
        action: "Sent draft NDA for review",
        comments: [
          { id: "c2a1", actor: "Marco Rossi", avatarUrl: avatar("marco-rossi"), date: new Date("2026-03-03"), text: "Standard NDA from our legal. Please review and let me know if anything needs changing.", files: [{ name: "Finovo_NDA_Draft.pdf", url: "#" }] },
        ],
      },
      { id: "2b", date: new Date("2026-03-05"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Requested changes to confidentiality period" },
      {
        id: "2c", date: new Date("2026-03-07"), actor: "Marco Rossi", avatarUrl: avatar("marco-rossi"),
        action: "Updated NDA with revised terms",
        comments: [
          { id: "c2c1", actor: "Marco Rossi", avatarUrl: avatar("marco-rossi"), date: new Date("2026-03-07"), text: "Updated to 3-year confidentiality period as discussed. Final version attached.", files: [{ name: "Finovo_NDA_v2_Final.pdf", url: "#" }] },
        ],
      },
      { id: "2d", date: new Date("2026-03-09"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Needs to review and sign the NDA", pending: true },
    ],
  },
  {
    id: "3",
    title: "Mobile app MVP — MediTrack",
    status: "your_turn",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Anna Kowalska", avatarUrl: avatar("anna-k") },
      { name: "Dev Singh", avatarUrl: avatar("dev-singh") },
      { name: "Ola Maj", avatarUrl: avatar("ola-maj") },
      { name: "Jakub Wójcik", avatarUrl: avatar("jakub-w") },
    ],
    currentStep: "Prepare sprint demo for the client",
    assignee: "Tom Czana",
    updatedAt: new Date("2026-03-08"),
    timeline: [
      { id: "3a", date: new Date("2026-01-15"), actor: "Anna Kowalska", avatarUrl: avatar("anna-k"), action: "Kicked off project with requirements workshop" },
      { id: "3b", date: new Date("2026-01-22"), actor: "Dev Singh", avatarUrl: avatar("dev-singh"), action: "Set up project repository and CI/CD pipeline" },
      { id: "3c", date: new Date("2026-02-05"), actor: "Jakub Wójcik", avatarUrl: avatar("jakub-w"), action: "Completed authentication module" },
      { id: "3d", date: new Date("2026-02-15"), actor: "Ola Maj", avatarUrl: avatar("ola-maj"), action: "Finished patient dashboard UI" },
      { id: "3e", date: new Date("2026-02-28"), actor: "Dev Singh", avatarUrl: avatar("dev-singh"), action: "Integrated appointment booking API" },
      {
        id: "3f", date: new Date("2026-03-04"), actor: "Anna Kowalska", avatarUrl: avatar("anna-k"),
        action: "Completed UAT and shared feedback",
        comments: [
          { id: "c3f1", actor: "Anna Kowalska", avatarUrl: avatar("anna-k"), date: new Date("2026-03-04"), text: "UAT report attached. 3 critical issues found in the booking flow.", files: [{ name: "MediTrack_UAT_Report.pdf", url: "#" }] },
          { id: "c3f2", actor: "Jakub Wójcik", avatarUrl: avatar("jakub-w"), date: new Date("2026-03-05"), text: "On it — will fix all three by tomorrow." },
        ],
      },
      { id: "3g", date: new Date("2026-03-06"), actor: "Jakub Wójcik", avatarUrl: avatar("jakub-w"), action: "Fixed critical bugs from UAT" },
      { id: "3h", date: new Date("2026-03-08"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Needs to prepare sprint demo for the client", pending: true },
    ],
  },
  {
    id: "4",
    title: "Cooperation agreement — Corewell",
    status: "your_turn",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Emily Chen", avatarUrl: avatar("emily-chen") },
      { name: "Marek Lewandowski", avatarUrl: avatar("marek-l") },
    ],
    currentStep: "Add data-processing clause and send back",
    assignee: "Tom Czana",
    updatedAt: new Date("2026-03-07"),
    timeline: [
      {
        id: "4a", date: new Date("2026-02-20"), actor: "Emily Chen", avatarUrl: avatar("emily-chen"),
        action: "Proposed partnership and sent initial terms",
        comments: [
          { id: "c4a1", actor: "Emily Chen", avatarUrl: avatar("emily-chen"), date: new Date("2026-02-20"), text: "Draft agreement attached. Looking forward to working together!", files: [{ name: "Corewell_Agreement_Draft.pdf", url: "#" }] },
        ],
      },
      { id: "4b", date: new Date("2026-02-25"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Reviewed terms with internal team" },
      {
        id: "4c", date: new Date("2026-03-01"), actor: "Marek Lewandowski", avatarUrl: avatar("marek-l"),
        action: "Flagged missing data-processing clause",
        comments: [
          { id: "c4c1", actor: "Marek Lewandowski", avatarUrl: avatar("marek-l"), date: new Date("2026-03-01"), text: "We need a GDPR-compliant data-processing addendum. Template attached.", files: [{ name: "DPA_Template.docx", url: "#" }] },
        ],
      },
      { id: "4d", date: new Date("2026-03-07"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Needs to add data-processing clause and send back", pending: true },
    ],
  },
  {
    id: "5",
    title: "API integration for LogiNext",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Raj Patel", avatarUrl: avatar("raj-patel") },
    ],
    currentStep: "Client to provide API credentials and docs",
    assignee: "Raj Patel",
    updatedAt: new Date("2026-03-06"),
    timeline: [
      {
        id: "5a", date: new Date("2026-02-28"), actor: "Tom Czana", avatarUrl: avatar("czana"),
        action: "Scoped integration requirements",
        comments: [
          { id: "c5a1", actor: "Tom Czana", avatarUrl: avatar("czana"), date: new Date("2026-02-28"), text: "Integration scope document ready. We'll need REST API access and webhook endpoints.", files: [{ name: "LogiNext_Integration_Scope.pdf", url: "#" }] },
        ],
      },
      { id: "5b", date: new Date("2026-03-03"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Requested API credentials and documentation" },
      { id: "5c", date: new Date("2026-03-06"), actor: "Raj Patel", avatarUrl: avatar("raj-patel"), action: "Needs to provide API credentials and docs", pending: true },
    ],
  },
  {
    id: "6",
    title: "CRM migration — Greenfield Properties",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Sophie Green", avatarUrl: avatar("sophie-g") },
      { name: "Bartek Kamiński", avatarUrl: avatar("bartek-k") },
      { name: "Ewa Duda", avatarUrl: avatar("ewa-duda") },
      { name: "Mateusz Wilk", avatarUrl: avatar("mateusz-w") },
      { name: "Natalia Bąk", avatarUrl: avatar("natalia-b") },
    ],
    currentStep: "Client to export data from legacy system",
    assignee: "Sophie Green",
    updatedAt: new Date("2026-03-04"),
    timeline: [
      { id: "6a", date: new Date("2026-01-20"), actor: "Sophie Green", avatarUrl: avatar("sophie-g"), action: "Requested CRM migration proposal" },
      {
        id: "6b", date: new Date("2026-01-28"), actor: "Tom Czana", avatarUrl: avatar("czana"),
        action: "Delivered migration plan and timeline",
        comments: [
          { id: "c6b1", actor: "Tom Czana", avatarUrl: avatar("czana"), date: new Date("2026-01-28"), text: "Full migration plan with milestones and risk assessment.", files: [{ name: "Greenfield_Migration_Plan.pdf", url: "#" }, { name: "Migration_Timeline.xlsx", url: "#" }] },
        ],
      },
      {
        id: "6c", date: new Date("2026-02-05"), actor: "Sophie Green", avatarUrl: avatar("sophie-g"),
        action: "Approved plan and signed SOW",
        comments: [
          { id: "c6c1", actor: "Sophie Green", avatarUrl: avatar("sophie-g"), date: new Date("2026-02-05"), text: "Signed SOW attached. Let's get started!", files: [{ name: "Greenfield_SOW_Signed.pdf", url: "#" }] },
        ],
      },
      { id: "6d", date: new Date("2026-02-12"), actor: "Bartek Kamiński", avatarUrl: avatar("bartek-k"), action: "Set up staging environment" },
      {
        id: "6e", date: new Date("2026-02-20"), actor: "Ewa Duda", avatarUrl: avatar("ewa-duda"),
        action: "Built data mapping schema",
        comments: [
          { id: "c6e1", actor: "Ewa Duda", avatarUrl: avatar("ewa-duda"), date: new Date("2026-02-20"), text: "Mapping schema covers all 47 fields. Please review before we start building import scripts.", files: [{ name: "Data_Mapping_Schema.xlsx", url: "#" }] },
        ],
      },
      { id: "6f", date: new Date("2026-03-01"), actor: "Mateusz Wilk", avatarUrl: avatar("mateusz-w"), action: "Prepared import scripts and validation rules" },
      { id: "6g", date: new Date("2026-03-04"), actor: "Sophie Green", avatarUrl: avatar("sophie-g"), action: "Needs to export data from legacy system", pending: true },
    ],
  },
  {
    id: "7",
    title: "Maintenance contract renewal — PayHive",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "James Lee", avatarUrl: avatar("james-lee") },
      { name: "Agnieszka Sikora", avatarUrl: avatar("agnieszka-s") },
    ],
    currentStep: "Legal reviewing updated SLA terms",
    assignee: "Agnieszka Sikora",
    updatedAt: new Date("2026-03-03"),
    timeline: [
      { id: "7a", date: new Date("2026-02-15"), actor: "James Lee", avatarUrl: avatar("james-lee"), action: "Requested contract renewal with updated SLA" },
      {
        id: "7b", date: new Date("2026-02-20"), actor: "Tom Czana", avatarUrl: avatar("czana"),
        action: "Drafted updated SLA terms",
        comments: [
          { id: "c7b1", actor: "Tom Czana", avatarUrl: avatar("czana"), date: new Date("2026-02-20"), text: "Draft SLA with updated response times and uptime guarantees.", files: [{ name: "PayHive_SLA_Draft.pdf", url: "#" }] },
        ],
      },
      { id: "7c", date: new Date("2026-02-26"), actor: "James Lee", avatarUrl: avatar("james-lee"), action: "Requested changes to response-time guarantees" },
      {
        id: "7d", date: new Date("2026-03-01"), actor: "Tom Czana", avatarUrl: avatar("czana"),
        action: "Revised SLA and sent to legal",
        comments: [
          { id: "c7d1", actor: "Tom Czana", avatarUrl: avatar("czana"), date: new Date("2026-03-01"), text: "Revised version with P1 response time changed to 1h. Sending to Agnieszka for legal review.", files: [{ name: "PayHive_SLA_v2.pdf", url: "#" }] },
        ],
      },
      { id: "7e", date: new Date("2026-03-03"), actor: "Agnieszka Sikora", avatarUrl: avatar("agnieszka-s"), action: "Needs to review updated SLA terms", pending: true },
    ],
  },
  {
    id: "8",
    title: "UX audit for TravelBee",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Nina Petrova", avatarUrl: avatar("nina-p") },
    ],
    currentStep: "Designer preparing audit report",
    assignee: "Nina Petrova",
    updatedAt: new Date("2026-03-01"),
    timeline: [
      {
        id: "8a", date: new Date("2026-02-18"), actor: "Tom Czana", avatarUrl: avatar("czana"),
        action: "Scoped audit and shared access to staging",
        comments: [
          { id: "c8a1", actor: "Tom Czana", avatarUrl: avatar("czana"), date: new Date("2026-02-18"), text: "Staging credentials and scope doc attached. Focus on onboarding and booking flows.", files: [{ name: "TravelBee_Audit_Scope.pdf", url: "#" }] },
        ],
      },
      { id: "8b", date: new Date("2026-02-22"), actor: "Nina Petrova", avatarUrl: avatar("nina-p"), action: "Completed heuristic evaluation of key flows" },
      { id: "8c", date: new Date("2026-03-01"), actor: "Nina Petrova", avatarUrl: avatar("nina-p"), action: "Needs to prepare the audit report", pending: true },
    ],
  },
  {
    id: "9",
    title: "DevOps setup for Velta",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Alex Norberg", avatarUrl: avatar("alex-n") },
      { name: "Bartek Kamiński", avatarUrl: avatar("bartek-k") },
    ],
    currentStep: "Client to approve AWS budget",
    assignee: "Alex Norberg",
    updatedAt: new Date("2026-03-02"),
    timeline: [
      { id: "9a", date: new Date("2026-02-20"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Presented infrastructure proposal" },
      { id: "9b", date: new Date("2026-02-25"), actor: "Bartek Kamiński", avatarUrl: avatar("bartek-k"), action: "Prepared cost breakdown for AWS resources" },
      { id: "9c", date: new Date("2026-03-02"), actor: "Alex Norberg", avatarUrl: avatar("alex-n"), action: "Needs to approve AWS budget", pending: true },
    ],
  },
  {
    id: "10",
    title: "Onboarding portal — HireFlow",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Diana Walsh", avatarUrl: avatar("diana-w") },
      { name: "Ola Maj", avatarUrl: avatar("ola-maj") },
    ],
    currentStep: "Client reviewing prototype",
    assignee: "Diana Walsh",
    updatedAt: new Date("2026-02-28"),
    timeline: [
      { id: "10a", date: new Date("2026-02-10"), actor: "Diana Walsh", avatarUrl: avatar("diana-w"), action: "Shared onboarding flow requirements" },
      { id: "10b", date: new Date("2026-02-18"), actor: "Ola Maj", avatarUrl: avatar("ola-maj"), action: "Delivered clickable prototype" },
      { id: "10c", date: new Date("2026-02-28"), actor: "Diana Walsh", avatarUrl: avatar("diana-w"), action: "Needs to review and approve the prototype", pending: true },
    ],
  },
  {
    id: "11",
    title: "Data analytics dashboard — Quartzy",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Leo Fang", avatarUrl: avatar("leo-fang") },
    ],
    currentStep: "Client gathering sample datasets",
    assignee: "Leo Fang",
    updatedAt: new Date("2026-02-26"),
    timeline: [
      { id: "11a", date: new Date("2026-02-15"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Scoped dashboard requirements and KPIs" },
      { id: "11b", date: new Date("2026-02-20"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Requested sample datasets for development" },
      { id: "11c", date: new Date("2026-02-26"), actor: "Leo Fang", avatarUrl: avatar("leo-fang"), action: "Needs to gather and send sample datasets", pending: true },
    ],
  },
  {
    id: "12",
    title: "SLA negotiation — CloudServe",
    status: "waiting",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Maria Santos", avatarUrl: avatar("maria-s") },
      { name: "Agnieszka Sikora", avatarUrl: avatar("agnieszka-s") },
    ],
    currentStep: "Legal drafting counter-proposal",
    assignee: "Agnieszka Sikora",
    updatedAt: new Date("2026-02-24"),
    timeline: [
      { id: "12a", date: new Date("2026-02-10"), actor: "Maria Santos", avatarUrl: avatar("maria-s"), action: "Sent initial SLA proposal" },
      { id: "12b", date: new Date("2026-02-15"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Reviewed and flagged uptime guarantees as too low" },
      { id: "12c", date: new Date("2026-02-24"), actor: "Agnieszka Sikora", avatarUrl: avatar("agnieszka-s"), action: "Needs to draft counter-proposal with updated terms", pending: true },
    ],
  },
]

export const DECAYING_CASES = [
  {
    id: "d1",
    title: "Invoice dispute — Neoncraft",
    status: "decaying",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Viktor Holm", avatarUrl: avatar("viktor-h") },
    ],
    currentStep: "No response from client for 23 days",
    assignee: "Viktor Holm",
    updatedAt: new Date("2026-02-16"),
    timeline: [
      { id: "d1a", date: new Date("2026-01-20"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Sent corrected invoice with breakdown" },
      { id: "d1b", date: new Date("2026-02-02"), actor: "Viktor Holm", avatarUrl: avatar("viktor-h"), action: "Acknowledged receipt, promised to review" },
      { id: "d1c", date: new Date("2026-02-16"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Followed up — still no response", pending: true },
    ],
  },
  {
    id: "d2",
    title: "Partnership proposal — Arcline",
    status: "decaying",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Sara Jensen", avatarUrl: avatar("sara-j") },
      { name: "Marek Lewandowski", avatarUrl: avatar("marek-l") },
    ],
    currentStep: "Waiting for signed LOI for 18 days",
    assignee: "Sara Jensen",
    updatedAt: new Date("2026-02-21"),
    timeline: [
      { id: "d2a", date: new Date("2026-01-28"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Presented partnership terms" },
      { id: "d2b", date: new Date("2026-02-05"), actor: "Sara Jensen", avatarUrl: avatar("sara-j"), action: "Expressed interest and requested LOI draft" },
      { id: "d2c", date: new Date("2026-02-10"), actor: "Marek Lewandowski", avatarUrl: avatar("marek-l"), action: "Sent LOI for signature" },
      { id: "d2d", date: new Date("2026-02-21"), actor: "Sara Jensen", avatarUrl: avatar("sara-j"), action: "Needs to sign and return the LOI", pending: true },
    ],
  },
]

export const ARCHIVED_CASES = [
  {
    id: "a1",
    title: "Brand identity for Nutrio",
    status: "archived",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Lena Müller", avatarUrl: avatar("lena-m") },
      { name: "Piotr Zieliński", avatarUrl: avatar("piotr-z") },
    ],
    currentStep: "Completed",
    assignee: "Tom Czana",
    updatedAt: new Date("2026-01-20"),
    timeline: [
      { id: "a1a", date: new Date("2025-11-05"), actor: "Lena Müller", avatarUrl: avatar("lena-m"), action: "Submitted brand brief and mood board" },
      { id: "a1b", date: new Date("2025-11-12"), actor: "Piotr Zieliński", avatarUrl: avatar("piotr-z"), action: "Delivered three logo concepts" },
      { id: "a1c", date: new Date("2025-11-20"), actor: "Lena Müller", avatarUrl: avatar("lena-m"), action: "Selected concept B with feedback" },
      { id: "a1d", date: new Date("2025-12-01"), actor: "Piotr Zieliński", avatarUrl: avatar("piotr-z"), action: "Finalized logo and brand guidelines" },
      { id: "a1e", date: new Date("2025-12-10"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Delivered final brand package to client" },
      { id: "a1f", date: new Date("2026-01-20"), actor: "Lena Müller", avatarUrl: avatar("lena-m"), action: "Approved and signed off" },
    ],
  },
  {
    id: "a2",
    title: "Landing page for Spark Events",
    status: "archived",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Olivia Hart", avatarUrl: avatar("olivia-h") },
    ],
    currentStep: "Completed",
    assignee: "Tom Czana",
    updatedAt: new Date("2026-02-01"),
    timeline: [
      { id: "a2a", date: new Date("2025-12-15"), actor: "Olivia Hart", avatarUrl: avatar("olivia-h"), action: "Shared content and requirements for the landing page" },
      { id: "a2b", date: new Date("2025-12-22"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Delivered first design draft" },
      { id: "a2c", date: new Date("2026-01-05"), actor: "Olivia Hart", avatarUrl: avatar("olivia-h"), action: "Approved design with minor copy tweaks" },
      { id: "a2d", date: new Date("2026-01-15"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Deployed landing page to production" },
      { id: "a2e", date: new Date("2026-02-01"), actor: "Olivia Hart", avatarUrl: avatar("olivia-h"), action: "Confirmed launch — case closed" },
    ],
  },
  {
    id: "a3",
    title: "Security audit — DataVault",
    status: "archived",
    collaborators: [
      { name: "Tom Czana", avatarUrl: avatar("czana") },
      { name: "Henrik Strand", avatarUrl: avatar("henrik-s") },
      { name: "Kasia Nowak", avatarUrl: avatar("kasia-nowak") },
      { name: "Bartek Kamiński", avatarUrl: avatar("bartek-k") },
    ],
    currentStep: "Completed",
    assignee: "Tom Czana",
    updatedAt: new Date("2025-12-18"),
    timeline: [
      { id: "a3a", date: new Date("2025-10-01"), actor: "Henrik Strand", avatarUrl: avatar("henrik-s"), action: "Requested security audit for cloud infrastructure" },
      { id: "a3b", date: new Date("2025-10-10"), actor: "Kasia Nowak", avatarUrl: avatar("kasia-nowak"), action: "Completed vulnerability scan" },
      { id: "a3c", date: new Date("2025-10-25"), actor: "Bartek Kamiński", avatarUrl: avatar("bartek-k"), action: "Performed penetration testing on API endpoints" },
      { id: "a3d", date: new Date("2025-11-10"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Compiled audit report with recommendations" },
      { id: "a3e", date: new Date("2025-11-20"), actor: "Henrik Strand", avatarUrl: avatar("henrik-s"), action: "Reviewed report and started remediation" },
      { id: "a3f", date: new Date("2025-12-05"), actor: "Kasia Nowak", avatarUrl: avatar("kasia-nowak"), action: "Verified all critical fixes applied" },
      { id: "a3g", date: new Date("2025-12-18"), actor: "Tom Czana", avatarUrl: avatar("czana"), action: "Closed audit — all issues resolved" },
    ],
  },
]
