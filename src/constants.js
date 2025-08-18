import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
