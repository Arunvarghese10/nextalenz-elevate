export const SITE = {
  name: "Nextalenz",
  legalName: "Nextalenz Consulting Pty Ltd",
  tagline: "Every Platform. One Partner.",
  address: "5 Davenport Street, Southport QLD 4215, Australia",
  responseSla: "Within 48 hours",
  email: "sales@nextalenz.com",
  phone: "+61 721 436 778",
  tollFree: "1300 355 154",
  website: "nextalenz.com",
} as const;

export const STATS = [
  { value: "28+", label: "Companies served and counting" },
  { value: "96%", label: "Client satisfaction" },
  { value: "10–20", label: "Team members" },
  { value: "3", label: "Countries — Australia, India, UAE" },
] as const;

export const COUNTRIES = ["Australia", "India", "UAE"] as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Why Us", to: "/why-nextalenz" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    teaser: "Find the right people, fast — from short-term specialists to permanent hires.",
    intro:
      "Finding the right people for the job — whether you need someone for a few months or a long-term hire.",
    points: [
      {
        title: "Contract Staffing",
        body: "Specialists available on a short or medium-term basis, across workforce systems (SAP, Workday, Dayforce, UKG and more) as well as software development, cloud, data, cybersecurity, and finance technology roles.",
      },
      {
        title: "Permanent Placement",
        body: "Full hiring support from search to signed offer, for roles at every level.",
      },
      {
        title: "Executive & Retained Search",
        body: "A confidential, dedicated search for senior and hard-to-fill leadership roles.",
      },
    ],
  },
  {
    id: "product-engineering",
    title: "Product Engineering & App Development",
    teaser: "We design and build the tools and apps that make workforce systems work better.",
    intro:
      "We design and build the software that makes workforce systems work better for your team.",
    points: [
      {
        title: "Custom tools and integrations",
        body: "Connect and extend the workforce systems you already run.",
      },
      {
        title: "Dashboards and reporting",
        body: "Turn people-data into useful insight your leaders actually use.",
      },
      {
        title: "Full project teams",
        body: "Designers, developers, and specialists who take an idea from first sketch through to a working product — and support it afterwards.",
      },
    ],
  },
  {
    id: "consulting",
    title: "Consulting & Transformation",
    teaser: "Expert guidance to set up, upgrade, or fix your workforce systems.",
    intro:
      "Expert help to set up, improve, or move between workforce systems — without the guesswork.",
    points: [
      {
        title: "Implementation and upgrades",
        body: "Setting up, upgrading, or moving to a new workforce system (SAP SuccessFactors, Workday, Dayforce, UKG, and others).",
      },
      {
        title: "Process review",
        body: "Reviewing how your HR processes work today and recommending a better way.",
      },
      {
        title: "Data, testing and training",
        body: "Support with moving your data, testing everything works, and training your team, so a new system actually gets used well.",
      },
    ],
  },
  {
    id: "managed-services",
    title: "Managed Services & Outsourcing",
    teaser: "Let us run the day-to-day work — recruiting, payroll, and system support.",
    intro: "Let us take care of the ongoing work, so your team doesn't have to.",
    points: [
      {
        title: "Recruitment, fully managed",
        body: "We run your hiring process for you, at whatever scale you need.",
      },
      {
        title: "Ongoing system support",
        body: "Ready to help the moment a new system goes live, and for as long as you need us after.",
      },
      {
        title: "Payroll and HR operations support",
        body: "Accurate, compliant, and handled for you.",
      },
    ],
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "We work across every platform.",
    body: "We're not tied to one system — we know SAP, Workday, Dayforce, UKG and more.",
  },
  {
    title: "One partner, everything covered.",
    body: "People, technology, consulting, and ongoing support — all under one roof.",
  },
  {
    title: "We specialise in workforce technology.",
    body: "It's the one thing we focus on and do well, not a side offering.",
  },
  {
    title: "We move fast without cutting corners.",
    body: "A shortlist of qualified candidates in as little as 72 hours.",
  },
  {
    title: "Your information stays private.",
    body: "Every detail is handled with strict confidentiality.",
  },
  {
    title: "We're in it for the long run.",
    body: "We stay engaged well beyond the first hire or project go-live.",
  },
] as const;

export const INDUSTRIES = [
  "Insurance",
  "Resources & Energy",
  "Public Sector",
  "Healthcare & Life Sciences",
  "Retail & FMCG",
  "Logistics & Supply Chain",
  "Telco & Media",
  "Higher Education",
  "Tech & SaaS",
] as const;

export const CLIENTS = [
  { name: "DXC Technology", domain: "dxc.com" },
  { name: "Zalaris", domain: "zalaris.com" },
  { name: "Bonfire Consulting", domain: "bonfireconsulting.com.au" },
  { name: "HR Path", domain: "hr-path.com" },
  { name: "Valid Visas", domain: "validvisas.com" },
  { name: "EDNA Training College", domain: "edna.edu.au" },
  { name: "AIMS Institute", domain: "theaims.ac.in" },
] as const;
