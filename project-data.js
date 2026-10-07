/**
 * ═══════════════════════════════════════════════════════
 *  PROJECT DATA — the only file you need to edit
 * ═══════════════════════════════════════════════════════
 */

/* ── SITE CONFIG ── */
const CONFIG = {
  email:        "reejan.pariyar.official@gmail.com",
  linkedin:     "https://linkedin.com/in/reejanpariyar",
  github:       "https://github.com/ReejanPariyar",
  instagram:    "https://www.instagram.com/reejan.pariyar/",
  facebook:     "https://facebook.com/",              // ← add your FB profile URL
  whatsapp:     "https://wa.me/447867507526",
  cv:           "assets/reejan-pariyar-cv.pdf",
  domain:       "reejanpariyar.q.uk",
  formEndpoint: ""                                    // paste Formspree URL here to use AJAX
};

/* ── PROJECTS ── */
const PROJECTS = [
  {
    id: "rudra-travels",
    status: "live",
    statusLabel: "Live",
    number: "01",
    title: "Rudra Travels & Trek",
    tagline: "Real business website, built and hosted on AWS from scratch.",
    tags: ["AWS S3", "CloudFront", "Route 53", "HTML/CSS", "JavaScript"],
    heroImage: "assets/images/rudra-hero.jpg",
    summary: "My uncle runs a trekking agency in Kathmandu. He needed a website. I built one and put it on AWS — S3, CloudFront, Route 53. It's live at rudra-travels.com and people are actually using it.",
    liveUrl: "https://rudra-travels.com",
    repoUrl: "https://github.com/ReejanPariyar",  // ← update to the specific repo
    overview: "My uncle runs Rudra Travels and Trek in Kathmandu — trekking, cultural tours, that sort of thing. He needed a proper website. I built it from scratch with HTML, CSS and JavaScript, then hosted it on AWS. This was my first time taking something from an idea to a live URL that real people visit.",
    sections: [
      {
        heading: "How it started",
        body: "My uncle's agency had no web presence. I said I'd build him one. I'd been learning AWS and this felt like a good reason to actually use it rather than just follow tutorials."
      },
      {
        heading: "What I set up on AWS",
        body: "S3 bucket for the static files, CloudFront in front of it for HTTPS and caching, Route 53 for the domain. I also set up an ACM certificate for SSL. Took me a bit to figure out the CloudFront + Route 53 connection but I got there."
      },
      {
        heading: "What I took away from it",
        body: "Honestly the hardest part wasn't the code — it was getting the DNS right and waiting for it to propagate. But seeing rudra-travels.com load in a browser for the first time was pretty satisfying. Real site, real visitors, no tutorial holding my hand."
      }
    ],
    projectTimeline: [
      { date: "2025",     event: "Project scoped — agency needed a professional web presence" },
      { date: "2025",     event: "Website designed and built with HTML/CSS/JS" },
      { date: "2025",     event: "AWS S3 bucket created and site deployed" },
      { date: "2025",     event: "CloudFront distribution configured with HTTPS" },
      { date: "2025",     event: "rudra-travels.com domain connected via Route 53" },
      { date: "Ongoing",  event: "Maintaining and updating content" }
    ],
    gallery: [
      { src: "assets/images/rudra-1.jpg", caption: "Homepage" },
      { src: "assets/images/rudra-2.jpg", caption: "Trekking packages section" },
      { src: "assets/images/rudra-3.jpg", caption: "AWS S3 bucket configuration" },
      { src: "assets/images/rudra-4.jpg", caption: "CloudFront distribution settings" },
      { src: "assets/images/rudra-5.jpg", caption: "Route 53 DNS records" },
      { src: "assets/images/rudra-6.jpg", caption: "Site live on mobile" }
    ],
    videos: [],
    files: [
      { label: "AWS architecture diagram", filename: "assets/rudra-architecture.pdf", type: "pdf" },
      { label: "Project documentation",    filename: "assets/rudra-docs.pdf",         type: "pdf" }
    ],
    evidence: [
      "Live at rudra-travels.com — viewable right now",
      "AWS CloudFront distribution screenshot (in gallery)",
      "Route 53 DNS configuration screenshot (in gallery)",
      "S3 bucket setup screenshot (in gallery)"
    ]
  },
  {
    id: "cloud-resume-challenge",
    status: "live",
    statusLabel: "Live",
    number: "02",
    title: "Cloud Resume Challenge",
    tagline: "The full challenge — Terraform infrastructure, CI/CD pipeline, no console clicks.",
    tags: ["Terraform", "AWS Lambda", "DynamoDB", "CloudFront", "GitHub Actions", "Python"],
    heroImage: "assets/images/crc-hero.jpg",
    summary: "The Cloud Resume Challenge completed end-to-end: static front end on CloudFront, visitor counter backed by Lambda and DynamoDB, full CI/CD pipeline via GitHub Actions, and the entire AWS environment defined in Terraform.",
    liveUrl: "https://d39rgsyhh5t880.cloudfront.net",
    repoUrl: "https://github.com/ReejanPariyar/cloud-resume-challenge",
    overview: "The Cloud Resume Challenge is a well-known project that tests whether you can actually use AWS rather than just read about it. I built it without clicking anything in the console — every resource is defined in Terraform.",
    sections: [
      {
        heading: "The architecture",
        body: "S3 hosts the static HTML/CSS resume. CloudFront serves it at the edge with HTTPS. A JavaScript fetch call hits an API Gateway endpoint which triggers a Python Lambda function that reads and writes a DynamoDB visitor counter. IAM roles are scoped to least privilege."
      },
      {
        heading: "Infrastructure as code",
        body: "Every AWS resource — S3 bucket, CloudFront distribution, Lambda function, DynamoDB table, API Gateway, IAM roles — is defined in Terraform. Nothing was clicked in the console. This means the whole environment is version-controlled, reviewable, and can be rebuilt in minutes."
      },
      {
        heading: "CI/CD pipeline",
        body: "A GitHub Actions workflow runs on every push to main: it runs terraform apply, syncs the site files to S3, and invalidates the CloudFront cache. The whole deployment takes under two minutes from git push to live."
      }
    ],
    projectTimeline: [
      { date: "Mar 2026", event: "Started — chose Terraform-first, no console approach" },
      { date: "Mar 2026", event: "S3 + CloudFront serving the static resume" },
      { date: "Apr 2026", event: "Python Lambda + DynamoDB visitor counter working" },
      { date: "Apr 2026", event: "GitHub Actions CI/CD pipeline connected" },
      { date: "Ongoing",  event: "Tightening IAM permissions and adding monitoring" }
    ],
    gallery: [
      { src: "assets/images/crc-1.jpg", caption: "Resume live on CloudFront" },
      { src: "assets/images/crc-2.jpg", caption: "Terraform plan output — all resources defined" },
      { src: "assets/images/crc-3.jpg", caption: "Lambda function — Python visitor counter" },
      { src: "assets/images/crc-4.jpg", caption: "DynamoDB table showing visitor count" },
      { src: "assets/images/crc-5.jpg", caption: "GitHub Actions pipeline passing" },
      { src: "assets/images/crc-6.jpg", caption: "IAM roles — least privilege config" }
    ],
    videos: [],
    files: [
      { label: "Terraform configuration",    filename: "assets/crc-terraform.pdf",  type: "pdf" },
      { label: "GitHub Actions workflow",     filename: "assets/crc-cicd.pdf",       type: "pdf" },
      { label: "Architecture diagram",        filename: "assets/crc-architecture.pdf", type: "pdf" }
    ],
    evidence: [
      "Live CloudFront URL — update liveUrl above once deployed",
      "GitHub repo with full Terraform code and commit history",
      "GitHub Actions green run logs (screenshot in gallery)",
      "DynamoDB showing real visitor counts (screenshot in gallery)"
    ]
  }
];

/* ── WORK EXPERIENCE ── */
const EXPERIENCE = [
  {
    role: "Freelance Cloud Engineer",
    company: "Pariyar Company Ltd.",
    period: "2026 — Present",
    type: "Freelance",
    location: "Remote / York",
    points: [
      "Delivered Buona Pizzeria — first paying client, S3 + CloudFront deployment on AWS",
      "Scoping and delivering end-to-end cloud infrastructure projects",
      "Operating under own registered company — cloud consulting and tech services"
    ]
  },
  {
    role: "Cloud Computing Intern",
    company: "CodeAlpha",
    period: "2026",
    type: "Internship",
    location: "Remote",
    points: [
      "Cloud computing internship alongside first-year degree studies",
      "Hands-on cloud infrastructure work in a professional environment"
    ]
  },
  {
    role: "Prep Chef",
    company: "Cresci Pizzeria",
    period: "2025 — Present",
    type: "Part-time",
    location: "York, UK",
    points: [
      "Mon–Thu plus occasional Sunday evenings — self-funding degree and certifications",
      "High-pressure kitchen environment: precision, speed, staying calm under stress",
      "Skills directly transferable to on-call work and incident response"
    ]
  },
  {
    role: "Front of House",
    company: "Bengal Brasserie",
    period: "2024 — 2025",
    type: "Part-time",
    location: "York, UK",
    points: [
      "Customer-facing role — communication, reliability, working under pressure",
      "First UK employment after relocating from Nepal"
    ]
  },
  {
    role: "Kitchen Porter / Prep",
    company: "Guy Fawkes Inn",
    period: "2024",
    type: "Part-time",
    location: "York, UK",
    points: [
      "Kitchen operations and prep work in a historic York venue"
    ]
  }
];

/* ── EDUCATION ── */
const EDUCATION = [
  {
    degree: "BSc Computer Science",
    institution: "York St John University",
    period: "2025 — 2028",
    status: "In progress",
    location: "York, UK",
    highlights: [
      "Self-funding as an international student from Nepal",
      "IELTS 7.0 — English language proficiency",
      "Balancing full-time studies with part-time work throughout"
    ]
  }
];

/* ── CERTIFICATIONS & COURSES ── */
const CERTIFICATIONS = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    code: "SAA-C03",
    status: "in-progress",
    statusLabel: "In progress",
    year: "2026",
    credential: ""
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "CLF-C02",
    status: "studied",
    statusLabel: "Study sprint complete",
    year: "2026",
    credential: ""
  },
  {
    name: "Adrian Cantrill AWS SAA Course",
    issuer: "learn.cantrill.io",
    code: "",
    status: "in-progress",
    statusLabel: "In progress",
    year: "2026",
    credential: ""
  }
];

/* ── LICENCES & CHECKS ── */
const LICENCES = [
  {
    name: "Basic DBS Check",
    issuer: "Disclosure & Barring Service (UK)",
    year: "2025",
    notes: "Required for UK employment — clear record"
  },
  {
    name: "Elderly Caregiver Training",
    issuer: "Angel Health Care",
    year: "2024",
    notes: "Completed formal training certificate"
  }
];

/* ── TIMELINE ── */
const TIMELINE = [
  { date: "2024",      category: "life",      title: "Arrived in York from Nepal",                  body: "Relocated to the UK as an international student, self-funding everything from day one." },
  { date: "2024",      category: "work",      title: "First UK employment",                          body: "Kitchen Porter at Guy Fawkes Inn, then Front of House at Bengal Brasserie. Learning the UK work environment." },
  { date: "2025",      category: "education", title: "BSc Computer Science — Year 1 begins",         body: "York St John University. Balancing full-time studies with part-time kitchen shifts. IELTS 7.0." },
  { date: "Jan 2026",  category: "learning",  title: "Cloud engineering self-study sprint",          body: "Intensive self-study: Linux, Git, Bash, Docker, Terraform, Python/boto3, GitHub Actions, Kubernetes, REST APIs. All committed to the public journey repo." },
  { date: "Feb 2026",  category: "milestone", title: "First real Terraform apply",                   body: "EC2 and S3 provisioned from code and destroyed cleanly. Infrastructure-as-code became real." },
  { date: "Feb 2026",  category: "milestone", title: "AWS key incident — caught and resolved",       body: "Secret access key accidentally committed. Caught immediately, rotated, CloudTrail audited, no misuse found. Documented as a security lesson." },
  { date: "Mar 2026",  category: "project",   title: "Client #01 — Buona Pizzeria ships",            body: "First paying client. Static site on S3 + CloudFront delivered under Pariyar Company Ltd." },
  { date: "2026",      category: "work",      title: "CodeAlpha internship — accepted",              body: "Cloud computing internship accepted alongside first-year coursework." },
  { date: "2026",      category: "learning",  title: "Adrian Cantrill SAA-C03 enrolled",             body: "Working through the AWS Solutions Architect Associate course. Target: pass SAA-C03 before end of year." },
  { date: "2027 →",    category: "future",    title: "Placement / internship year",                  body: "Actively seeking cloud and security placements for 2027. Target roles: Cloud Engineer, Security Engineer, DevSecOps." },
  { date: "2028 →",    category: "future",    title: "Graduate — Cloud Security Architect",          body: "Long-term goal: Cloud Security Architect. Building Pariyar Company Ltd. alongside." }
];
