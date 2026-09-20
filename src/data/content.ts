export const profile = {
  name: "Deepak Thimmireddy",
  firstName: "Deepak",
  lastName: "Thimmireddy",
  initials: "DT",
  title: "Sr. DevOps / Cloud Engineer",
  organization: "JPMorgan Chase",
  phone: "+1 774-777-8562",
  phoneHref: "tel:+17747778562",
  email: "dpkr65@gmail.com",
  emailHref: "mailto:dpkr65@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-l-t-bab7551b9/",
  linkedinLabel: "linkedin.com/in/deepak-l-t",
  summary:
    "5 years in DevOps and cloud infrastructure across banking, government healthcare, and EdTech.",
  about:
    "I build and operate Terraform-managed infrastructure on AWS and Azure, run Kubernetes on Amazon EKS and AKS, and automate delivery through Jenkins, Azure DevOps, GitHub Actions, and GitLab CI/CD. Most of that work sits under change control, CAB approval, and audit requirements, including public health systems handling PHI and PII under NIST 800-53.",
}

export const navLinks = [
  { href: "home", label: "home" },
  { href: "skills", label: "skills" },
  { href: "about", label: "about" },
  { href: "experience", label: "experience" },
  { href: "projects", label: "projects" },
  { href: "services", label: "services" },
  { href: "contact", label: "contact" },
] as const

export const expertiseTopics = [
  "AWS and Azure cloud infrastructure",
  "Terraform, ARM templates, and Ansible",
  "Kubernetes, EKS, AKS, Helm, and Karpenter",
  "Docker and multi-stage image builds",
  "Jenkins, GitLab CI/CD, Azure DevOps, and GitHub Actions",
  "Linux administration, Python, and Bash",
  "IAM, Entra ID, RBAC, and Secrets Manager",
  "CloudWatch, Azure Monitor, and CloudTrail",
  "CAB change control, NIST 800-53, PHI and PII",
  "Incident response, disaster recovery, and cost optimization",
] as const

export const contactTiles = [
  { id: "phone", label: "Phone", value: "+1 774-777-8562", href: "tel:+17747778562" },
  { id: "email", label: "Email", value: "dpkr65@gmail.com", href: "mailto:dpkr65@gmail.com" },
  { id: "location", label: "Location", value: "Plano, TX", href: "" },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/deepak-l-t",
    href: "https://www.linkedin.com/in/deepak-l-t-bab7551b9/",
  },
] as const

export const highlightTiles = [
  { metric: "5+", label: "Years Experience" },
  { metric: "AWS & Azure", label: "Cloud Platforms" },
  { metric: "EKS & AKS", label: "Kubernetes Delivery" },
] as const

export const skillCategories = [
  {
    id: "cloud",
    title: "Cloud platforms",
    featured: true,
    skills: ["AWS", "Azure"],
  },
  {
    id: "iac",
    title: "Infrastructure as code",
    featured: false,
    skills: ["Terraform", "ARM templates", "Ansible", "Helm"],
  },
  {
    id: "kubernetes",
    title: "Kubernetes & containers",
    featured: false,
    skills: ["Kubernetes", "EKS", "AKS", "Docker", "ECR", "Karpenter"],
  },
  {
    id: "cicd",
    title: "CI/CD",
    featured: false,
    skills: ["Jenkins", "Azure DevOps", "GitHub Actions", "GitLab CI/CD", "Bitbucket Pipelines", "Trivy"],
  },
  {
    id: "config",
    title: "Configuration & OS",
    featured: false,
    skills: ["Linux", "RHEL", "Ubuntu", "CentOS", "Amazon Linux", "Windows"],
  },
  {
    id: "scripting",
    title: "Languages & scripting",
    featured: false,
    skills: ["Python", "Bash", "PowerShell", "YAML", "JSON"],
  },
  {
    id: "supply",
    title: "Source & supply chain",
    featured: false,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Trivy"],
  },
  {
    id: "observe",
    title: "Observability",
    featured: false,
    skills: ["CloudWatch", "CloudTrail", "Azure Monitor", "Log Analytics", "Application Insights"],
  },
  {
    id: "ops",
    title: "Identity & operations",
    featured: false,
    skills: ["IAM", "Entra ID", "RBAC", "Key Vault", "Secrets Manager", "disaster recovery"],
  },
] as const

export const focusAreas = [
  {
    kicker: "IaC",
    title: "Terraform",
    copy: "Reusable modules and isolated workspaces for AWS and Azure.",
  },
  {
    kicker: "K8s",
    title: "Kubernetes",
    copy: "EKS, AKS, Helm, IRSA, and Karpenter for platform workloads.",
  },
  {
    kicker: "CI/CD",
    title: "Automation",
    copy: "Jenkins, GitLab, Azure DevOps, and GitHub Actions with scan gates.",
  },
] as const

export const aboutHighlights = [
  {
    title: "Cloud infrastructure",
    description:
      "AWS and Azure estates with Terraform, ARM templates, and repeatable workspaces.",
  },
  {
    title: "Kubernetes platforms",
    description:
      "EKS and AKS delivery with Helm, Docker, IRSA, Karpenter, and image scanning.",
  },
  {
    title: "CI/CD automation",
    description:
      "Jenkins, GitLab CI/CD, Azure DevOps, GitHub Actions, and Bitbucket pipelines.",
  },
  {
    title: "Operations discipline",
    description:
      "CAB change control, NIST 800-53, IAM, monitoring, incident response, and DR.",
  },
] as const

export const achievements = [
  { metric: "5+", label: "Years Experience" },
  { metric: "20+", label: "Services on EKS" },
  { metric: "30+", label: "EC2 Instances" },
  { metric: "40%+", label: "Smaller Images" },
] as const

export const experience = [
  {
    org: "JPMORGAN CHASE",
    context: "Sr. DevOps / Cloud Engineer · Jan 2026 - Present",
    place: "Plano, Texas",
    summary:
      "Own Terraform modules for AWS infrastructure covering EC2, VPC, IAM, S3, Lambda, and RDS, with remote state, DynamoDB locking, and isolated Dev, QA, and Prod workspaces. Delivery through GitLab CI/CD and Jenkins; EKS and Helm with rolling and blue-green releases; Karpenter, Secrets Manager rotation, CloudWatch, and on-call incident response.",
    points: [
      "Reusable Terraform modules with remote state and environment isolation",
      "GitLab and Jenkins pipelines; EKS, Helm, and Karpenter",
      "IAM, CloudTrail, Secrets Manager rotation, and CloudWatch",
      "RDS performance, incident response, disaster recovery, and cost optimization",
    ],
  },
  {
    org: "STATE OF NJ",
    context: "DevOps / Cloud Infrastructure Engineer · Jun 2024 - Dec 2025",
    place: "Trenton, New Jersey",
    summary:
      "Operated three EKS clusters running 20+ public health services handling PHI and PII. Docker multi-stage builds, required Trivy gates before ECR, IRSA in line with NIST 800-53, reusable Terraform across Dev, Test, Perf, and Prod, and Jenkins plus Bitbucket pipelines that cleared CAB before any environment change.",
    points: [
      "Three EKS clusters and 20+ services handling PHI and PII",
      "Docker multi-stage builds cut average image size by over 40%",
      "Trivy required before ECR; IRSA mapped to NIST 800-53",
      "Terraform workspaces and CAB-gated Jenkins / Bitbucket delivery",
    ],
  },
  {
    org: "TD BANK",
    context: "Azure DevOps Engineer · May 2022 - May 2024",
    place: "Mount Laurel, New Jersey",
    summary:
      "Designed Azure infrastructure against the Well-Architected Framework with Terraform and ARM templates. Ran AKS, App Services, Functions, and API Management behind Entra ID, Key Vault, private networking, Azure Monitor, Backup, Site Recovery, Defender for Cloud, and Azure Policy.",
    points: [
      "Azure infrastructure with Terraform and ARM templates",
      "Azure DevOps, GitHub Actions, and Jenkins",
      "AKS, App Services, Functions, and API Management",
      "Entra ID, Key Vault, private networking, backup, and disaster recovery",
    ],
  },
  {
    org: "VEDANTU",
    context: "DevOps Engineer · May 2020 - Jul 2021",
    place: "Bangalore, India",
    summary:
      "Provisioned 30+ EC2 instances across web, worker, and media tiers for live class events. Ansible and Bash cut instance bring-up from hours to about 15 minutes. Jenkins, Docker, Terraform in Bitbucket, and CloudWatch alarms fed on-call dashboards during peak student traffic.",
    points: [
      "30+ EC2 instances across three environments",
      "Ansible and Bash cut instance bring-up to about 15 minutes",
      "Jenkins, Docker, and Terraform tracked in Bitbucket",
      "CloudWatch alarms for live class events with thousands of students",
    ],
  },
] as const

export const projects = [
  {
    name: "AWS Platform Delivery",
    company: "JPMorgan Chase",
    period: "January 2026 - Present",
    summaries: [
      "Own the Terraform modules and delivery path for AWS infrastructure covering compute, networking, IAM, storage, Lambda, and RDS, with remote state and separate workspaces so Dev, QA, and Prod do not drift.",
      "Move services off manual release windows onto GitLab CI/CD and Jenkins, deploy to Amazon EKS with Helm, and keep credentials, spend, and recovery under automated control.",
    ],
    points: [
      "Reusable Terraform modules with S3 remote state and DynamoDB locking",
      "Build, test, image scan, and deploy pipelines in GitLab CI/CD and Jenkins",
      "Helm deployments to Amazon EKS using rolling and blue-green strategies",
      "Karpenter node provisioning with rightsizing and Savings Plans coverage",
      "Secrets Manager rotation through Python Lambda functions",
      "CloudWatch dashboards, on-call incident response, and cross-region DR testing",
      "Shared pipeline templates, branching conventions, and onboarding runbooks",
    ],
    tags: [
      "AWS",
      "Terraform",
      "EKS",
      "Helm",
      "Karpenter",
      "GitLab CI/CD",
      "Jenkins",
      "Secrets Manager",
      "CloudWatch",
      "Python",
    ],
  },
  {
    name: "Public Health Kubernetes",
    company: "State of NJ, Dept. of Health",
    period: "June 2024 - December 2025",
    summaries: [
      "Operated Kubernetes for public health systems handling PHI and PII across three EKS clusters and 20+ services, with every environment change clearing CAB approval first.",
      "Hardened the path to production with multi-stage Docker builds, required Trivy scanning, and IRSA so workloads used short-lived IAM roles instead of long-lived node credentials.",
    ],
    points: [
      "Managed Deployments, StatefulSets, DaemonSets, and Ingress on three EKS clusters",
      "Cut average image size by over 40% with Docker multi-stage builds",
      "Made Trivy a required Jenkins gate before any ECR push",
      "Migrated workloads to IRSA in line with NIST 800-53",
      "Wrote reusable Terraform modules for Dev, Test, Perf, and Prod",
      "Administered RHEL and Ubuntu estates, patching, and backup jobs",
      "Delivered Jenkins pipelines with Bitbucket integration and CAB validation gates",
    ],
    tags: [
      "EKS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "Bitbucket",
      "Trivy",
      "IRSA",
      "NIST 800-53",
      "PHI / PII",
    ],
  },
] as const

export const competencies = [
  {
    title: "Cloud infrastructure",
    description:
      "AWS and Azure estates designed with reusable infrastructure as code and isolated environments.",
    features: ["AWS", "Azure", "Terraform", "ARM templates", "Ansible"],
  },
  {
    title: "Kubernetes platforms",
    description:
      "Cluster delivery and packaging for enterprise and public-sector services on EKS and AKS.",
    features: ["Kubernetes", "EKS", "AKS", "Helm", "Docker", "Karpenter"],
  },
  {
    title: "CI/CD systems",
    description:
      "Pipelines that move change through scan gates and CAB approval with a clear audit trail.",
    features: ["Jenkins", "GitLab CI/CD", "Azure DevOps", "GitHub Actions", "Trivy"],
  },
  {
    title: "Configuration & OS",
    description:
      "Fleet setup and Linux operations that turn hours of instance work into repeatable playbooks.",
    features: ["Ansible", "Linux", "RHEL", "Ubuntu", "CentOS"],
  },
  {
    title: "Observability",
    description:
      "Signals that explain the platform: logs, trails, and monitors used in day-to-day operations.",
    features: ["CloudWatch", "CloudTrail", "Azure Monitor", "Log Analytics", "Application Insights"],
  },
  {
    title: "Security & operations",
    description:
      "Access control, regulated workloads, recovery planning, and cost discipline for production.",
    features: ["IAM", "Entra ID", "Key Vault", "NIST 800-53", "disaster recovery"],
  },
] as const

export const education = [
  {
    credential: "M.S. Information Technology",
    school: "Clark University, Worcester, MA",
    year: "2021 - 2022",
  },
  {
    credential: "B.Tech Computer Science",
    school: "GITAM University, Visakhapatnam, India",
    year: "2016 - 2020",
  },
] as const
