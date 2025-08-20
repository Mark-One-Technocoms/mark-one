import SupportImg from "@/assets/support.jpg";
import WorldImg from "@/assets/world.jpg";
import TeamImg from "@/assets/team.jpg";
import CloudImg from "@/assets/cloud.jpg";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Wallet,
  Database,
  Cloud,
  Code,
  Workflow,
  LifeBuoy,
} from "lucide-react";

export const navItems = [
  { id: 1, label: "Home", to: "/" },
  {
    id: 2,
    label: "About Us",
    to: "",
    items: [
      { id: 1, label: "Our Story", to: "our-story" },
      {
        id: 2,
        label: "Core Values & Strategy",
        to: "core-values-and-strategy",
      },
      { id: 3, label: "Leadership", to: "leadership" },
      { id: 4, label: "Careers", to: "careers" },
    ],
  },
  {
    id: 3,
    label: "Advantage",
    to: "",
    items: [
      { id: 1, label: "Overview", to: "overview" },
      { id: 2, label: "Value Proposition", to: "value-proposition" },
      { id: 3, label: "Delivery Models", to: "delivery-models" },
      {
        id: 4,
        label: "research-infrastructure",
        to: "research-infrastructure",
      },
      {
        id: 5,
        label: "Certifications and Compliance",
        to: "certifications-and-compliance",
      },
    ],
  },
  {
    id: 4,
    label: "Products",
    to: "",
    items: [
      { id: 1, label: "Knowledge Services", to: "knowledge-services" },
      { id: 2, label: "Information Services", to: "information-services" },
      { id: 3, label: "Transaction Processing", to: "transaction-processing" },
    ],
  },
  {
    id: 5,
    label: "Training & Certification",
    to: "",
    items: [
      { id: 1, label: "Overview", to: "overview" },
      { id: 2, label: "Management Roles", to: "management-roles" },
      { id: 3, label: "Supervisory Roles", to: "supervisory-roles" },
      { id: 4, label: "Frontline Roles", to: "frontline-roles" },
      {
        id: 5,
        label: "Frontline Certification",
        to: "frontline-certification",
      },
      {
        id: 6,
        label: "Designing & Analyzing Customer Satisfaction",
        to: "designing-and-analyzing-customer-satisfaction",
      },
      {
        id: 7,
        label: "Designing and Managing Mystery Shopper Program",
        to: "designing-and-managing-mystery-shopper-program",
      },
      { id: 8, label: "Full Course Listing", to: "full-course-listing" },
    ],
  },
  { id: 6, label: "Resources", to: "resources" },
  { id: 7, label: "Industries", to: "industries" },
  { id: 8, label: "Contact Us", to: "contact" },
];

export const socialMediaLinks = [
  { id: 1, label: "facebook", to: "#", icon: Facebook },
  { id: 2, label: "instagram", to: "#", icon: Instagram },
  { id: 3, label: "linkedin", to: "#", icon: Linkedin },
  { id: 4, label: "twitter", to: "#", icon: Twitter },
];

export const hero = {
  title: "Mark One – Capital. Cloud. Confidence.",
  subline:
    "We are investors, mentors, and builders of the next-generation AI, SaaS, and data ecosystems.",
  tagline: "Build with our money. Scale with our people. Deploy on our cloud.",
  ctas: [
    {
      id: 1,
      label: "Submit Your Pitch",
      href: "/contact",
      type: "primary",
    },
    {
      id: 2,
      label: "Order a Dataset",
      href: "/contact",
      type: "secondary",
    },
    {
      id: 3,
      label: "Host on Our Cloud",
      href: "/contact",
      type: "secondary",
    },
  ],
};

export const pillars = [
  {
    id: "investment",
    title: "Investment & Mentorship",
    desc: "We back bold founders building cloud SaaS, AI agents, and outsourcing innovations.",
    Icon: Wallet,
    cta: {
      label: "Submit Your Pitch",
      href: "/contact?type=pitch",
      type: "primary",
    },
  },
  {
    id: "data-services",
    title: "Data Services",
    desc: "Any dataset. Any scale. Anywhere.",
    Icon: Database,
    cta: {
      label: "Order a Dataset",
      href: "/contact?type=dataset",
      type: "secondary",
    },
  },
  {
    id: "cloud",
    title: "Cloud & Hosting (Iron Data Vaults)",
    desc: "Don’t just rent the cloud. Own it.",
    Icon: Cloud,
    cta: {
      label: "Host Your Startup in Our Vaults",
      href: "/contact?type=cloud",
      type: "secondary",
    },
  },
];

export const ironVaults = {
  title: "Iron Data Vaults – Redefining how the world stores and owns data.",
  sub: "The cloud is no longer a service. It’s an asset you can own.",
  bullets: [
    "Sovereign AI data centres in Delhi & Dehradun",
    "Fractional cloud ownership (tokenized infrastructure)",
    "AI-optimized for training, inference, and high-performance workloads",
  ],
  cta: {
    label: "Invest in the Future of Cloud",
    href: "/contact",
    type: "secondary",
  },
};

export const outsourcing = {
  title: "Manpower & Tech Outsourcing",
  copy: "On-demand teams, global outsourcing, AI testing, multilingual customer support. Flexible models from remote pods to fully managed services.",
  cta: {
    label: "Request Manpower",
    href: "/contact?type=manpower",
    type: "primary",
  },
};

export const techServices = {
  items: [
    {
      id: 1,
      title: "SaaS Development",
      desc: "Build fast, scale globally.",
      Icon: Code,
    },
    {
      id: 2,
      title: "Cloud & DevOps Support",
      desc: "Monitoring, pipelines, automation.",
      Icon: Cloud,
    },
    {
      id: 3,
      title: "AI Agent Integration",
      desc: "Embed intelligent agents into workflows.",
      Icon: Workflow,
    },
    {
      id: 4,
      title: "24/7 Tech Teams",
      desc: "Reliable, cost-efficient, always on.",
      Icon: LifeBuoy,
    },
  ],
  cta: {
    label: "Talk to an Advisor",
    href: "/contact",
    type: "primary",
  },
};

export const workspace = {
  title: "From desk to data centre—we host it all.",
  copy: "Incubation hubs, remote-first infrastructure, and enterprise-grade facilities connected to our cloud.",
  cta: {
    label: "Explore Workspace Solutions",
    href: "/ecosystem/workspace",
    type: "tertiary",
  },
};

export const whyMarkOne = [
  {
    id: 1,
    img: SupportImg,
    title: "Capital + Counsel",
    desc: "We invest and mentor, not just bankroll.",
  },
  {
    id: 2,
    img: CloudImg,
    title: "Data + Cloud",
    desc: "From datasets to sovereign hosting, we deliver the backbone.",
  },
  {
    id: 3,
    img: TeamImg,
    title: "People + Places",
    desc: "Manpower and office infrastructure to scale.",
  },
  {
    id: 4,
    img: WorldImg,
    title: "Global Edge",
    desc: "A network that connects startups to enterprises and investors worldwide.",
  },
];

export const finalCta = {
  title:
    "Your idea deserves capital, cloud, and confidence. We bring all three.",
  buttons: [
    { label: "Upload Pitch Deck", href: "/contact?type=pitch" },
    { label: "Request Dataset", href: "/contact?type=dataset" },
    { label: "Apply for Cloud Hosting", href: "/contact?type=cloud" },
    { label: "Talk to an Advisor", href: "/contact?type=advisor" },
  ],
  footer: "Pitch in. Plug in. Power up—with Mark One.",
};
