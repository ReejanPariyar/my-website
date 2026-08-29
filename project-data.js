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
    id: "buona-pizzeria",
    status: "live",
    statusLabel: "Live",
    number: "01",
    title: "Buona Pizzeria",
    tagline: "First real client. First real cloud deployment.",
    tags: ["AWS S3", "CloudFront", "Route 53", "Terraform"],
    heroImage: "assets/images/buona-hero.jpg",
    summary: "A production website for a Roman pizza pop-up in York, delivered under Pariyar Company Ltd. Hosted on S3 with CloudFront CDN — zero server, global edge, under £5/month.",
    liveUrl: "#",
    repoUrl: "",
    overview: "Buona Pizzeria is a friend's Roman-style pizza pop-up operating in York. They needed a professional web presence fast, with no ongoing server costs. I scoped, built and handed it over under Pariyar Company Ltd. — my first paying client, my first production AWS deployment.",
    sections: [
      { heading: "The problem", body: "A food pop-up with a launch date, no website, and a budget that ruled out any managed hosting. The site needed to load fast on mobile, be easy to update, and cost almost nothing per month." },
      { heading: "What I built", body: "A fully static site served from an S3 bucket via CloudFront, with Route 53 managing DNS. The whole infrastructure is defined in Terraform so it can be torn down and rebuilt in minutes." },
      { heading: "What I learned", body: "Scoping client work is harder than the technical part. Collecting content from a busy chef takes longer than writing the Terraform. I now include a content deadline in every client brief." },
      { heading: "The security incident I caught", body: "During development I accidentally committed an AWS Secret Access Key to a public repo. I caught it within minutes, immediately rotated the key, audited CloudTrail, found nothing suspicious, and documented the full incident in the repo." }
    ],
    projectTimeline: [
      { date: "Jan 2026", event: "Client brief and scope agreed" },
      { date: "Feb 2026", event: "Terraform infrastructure written and tested" },
      { date: "Feb 2026", event: "Site built and reviewed with client" },
      { date: "Mar 2026", event: "DNS cut-over — site live on CloudFront" }
    ],
    gallery: [
      { src: "assets/images/buona-1.jpg", caption: "Homepage on mobile" },
      { src: "assets/images/buona-2.jpg", caption: "Menu section" },
      { src: "assets/images/buona-3.jpg", caption: "AWS S3 bucket config" },
      { src: "assets/images/buona-4.jpg", caption: "CloudFront distribution" },
      { src: "assets/images/buona-5.jpg", caption: "Terraform plan output" },
      { src: "assets/images/buona-6.jpg", caption: "Route 53 DNS records" }
    ],
    videos: [
      { type: "local", src: "assets/videos/buona-walkthrough.mp4", poster: "assets/images/buona-video-thumb.jpg", title: "Full project walkthrough — me explaining what I built and why" }
    ],
    files: [
      { label: "Terraform configuration", filename: "assets/docs/buona-terraform.pdf", type: "pdf" },
      { label: "Architecture diagram",    filename: "assets/docs/buona-architecture.pdf", type: "pdf" }
    ],
    evidence: [
      "Live CloudFront URL (update # in liveUrl above)",
      "Terraform state file proving infrastructure-as-code",
      "CloudTrail incident log from the key rotation",
      "Client sign-off message (screenshot in gallery)"
    ]
  },
  {
    id: "cloud-resume-challenge",
    status: "building",
    statusLabel: "Building",
    number: "02",
    title: "Cloud Resume Challenge",
    tagline: "The full challenge, done properly — Terraform, not clicks.",
    tags: ["Terraform", "CloudFront", "IAM", "GitHub Actions"],
    heroImage: "assets/images/crc-hero.jpg",
    summary: "The Cloud Resume Challenge completed end-to-end: static front end on CloudFront, visitor counter backed by Lambda + DynamoDB, CI/CD via GitHub Actions, entire AWS environment in Terraform.",
    liveUrl: "#",
    repoUrl: "https://github.com/ReejanPariyar/cloud-engineer-journey",
    overview: "The Cloud Resume Challenge tests whether you can actually use the cloud rather than just read about it. I chose to do it without clicking anything in the AWS console — everything is Terraform.",
    sections: [
      { heading: "Why I did it this way", body: "Anyone can click through the AWS console. Defining the same infrastructure in Terraform means it is version-controlled, reviewable, repeatable, and destroyable. That is how production infrastructure is actually managed." },
      { heading: "The architecture", body: "S3 hosts the static HTML/CSS. CloudFront serves it at the edge. A JavaScript fetch call hits an API Gateway endpoint, which triggers a Lambda function written in Python that reads and writes a DynamoDB visitor counter." },
      { heading: "CI/CD pipeline", body: "A GitHub Actions workflow runs on every push to main: applies the Terraform plan, syncs the site to S3, and invalidates the CloudFront cache. The whole deployment takes under two minutes." }
    ],
    projectTimeline: [
      { date: "Mar 2026", event: "Started — chose Terraform-first approach" },
      { date: "Mar 2026", event: "S3 + CloudFront serving static site" },
      { date: "Apr 2026", event: "Lambda + DynamoDB visitor counter working" },
      { date: "Apr 2026", event: "GitHub Actions CI/CD pipeline live" },
      { date: "Ongoing",  event: "Hardening IAM and adding monitoring" }
    ],
    gallery: [
      { src: "assets/images/crc-1.jpg", caption: "Site live on CloudFront" },
      { src: "assets/images/crc-2.jpg", caption: "Terraform plan — all resources defined" },
      { src: "assets/images/crc-3.jpg", caption: "Lambda function in Python" },
      { src: "assets/images/crc-4.jpg", caption: "DynamoDB table — visitor count" },
      { src: "assets/images/crc-5.jpg", caption: "GitHub Actions pipeline passing" },
      { src: "assets/images/crc-6.jpg", caption: "IAM roles — least privilege" }
    ],
    videos: [
      { type: "local", src: "assets/videos/crc-walkthrough.mp4", poster: "assets/images/crc-video-thumb.jpg", title: "Architecture walkthrough — me explaining every component" }
    ],
    files: [
      { label: "Full Terraform configuration", filename: "assets/docs/crc-terraform.pdf", type: "pdf" },
      { label: "GitHub Actions workflow YAML",  filename: "assets/docs/crc-cicd.pdf",     type: "pdf" }
    ],
    evidence: [
      "Live CloudFront URL (update # above)",
      "Public GitHub repo with full commit history",
      "GitHub Actions green run logs",
      "DynamoDB screenshot showing real visitor counts"
    ]
  },
  {
    id: "cloud-engineer-journey",
    status: "oss",
    statusLabel: "Ongoing",
    number: "03",
    title: "Cloud Engineer Journey",
    tagline: "Everything I have learned, in public, committed to Git.",
    tags: ["Python", "Bash", "Docker", "Kubernetes", "boto3", "GitHub Actions"],
    heroImage: "assets/images/journey-hero.jpg",
    summary: "A public learning repo covering Git, Bash scripting, Docker, Terraform, Python/boto3, CI/CD, Kubernetes and REST APIs — all built against real AWS, not a sandbox.",
    liveUrl: "",
    repoUrl: "https://github.com/ReejanPariyar/cloud-engineer-journey",
    overview: "Rather than hiding my learning process, I committed it. This repo is a record of every topic I have studied, every script I have written, and every mistake I have made and fixed — all in public.",
    sections: [
      { heading: "What is in the repo", body: "Phase 1: Linux, Git, Bash. Phase 2: Docker, Terraform with real EC2/S3 deployments, Python boto3. Phase 3: GitHub Actions CI/CD, pytest, Kubernetes basics, REST API work. Each phase has its own folder with notes and working code." },
      { heading: "Real AWS, not a sandbox", body: "Every AWS example was run against a real account and then destroyed. The Terraform state files and CloudTrail logs prove it. This is not a notes dump — it is a record of things I actually built and broke." },
      { heading: "The learning method", body: "Study a topic, build something small, write up what I learned in a README, commit. If something breaks I document why and what I did to fix it. The commit history is the evidence." }
    ],
    projectTimeline: [
      { date: "Jan 2026", event: "Repo created — Linux + Git phase started" },
      { date: "Feb 2026", event: "Docker and first Terraform apply against real AWS" },
      { date: "Feb 2026", event: "Python boto3 scripts — S3, EC2 automation" },
      { date: "Mar 2026", event: "GitHub Actions CI/CD pipelines" },
      { date: "Mar 2026", event: "Kubernetes basics added" },
      { date: "Ongoing",  event: "Expanding with new topics as I study them" }
    ],
    gallery: [
      { src: "assets/images/journey-1.jpg", caption: "Repo structure overview" },
      { src: "assets/images/journey-2.jpg", caption: "Terraform apply — EC2 provisioned" },
      { src: "assets/images/journey-3.jpg", caption: "boto3 script listing S3 buckets" },
      { src: "assets/images/journey-4.jpg", caption: "GitHub Actions workflow green" },
      { src: "assets/images/journey-5.jpg", caption: "Docker container running locally" },
      { src: "assets/images/journey-6.jpg", caption: "Kubernetes pod deployed" }
    ],
    videos: [
      { type: "local", src: "assets/videos/journey-tour.mp4", poster: "assets/images/journey-video-thumb.jpg", title: "Repo tour — me walking through each phase and what I built" }
    ],
    files: [
      { label: "Learning roadmap PDF", filename: "assets/docs/roadmap.pdf", type: "pdf" }
    ],
    evidence: [
      "Public GitHub repo — full commit history visible",
      "Real AWS console screenshots in gallery",
      "terraform apply output logs committed to repo",
      "pytest results from CI pipeline"
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
