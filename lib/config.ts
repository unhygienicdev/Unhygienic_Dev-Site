import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Nexus",
  description: "The next-generation SaaS platform for modern teams. Build faster, scale smarter, and deliver exceptional experiences.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://nexus.dev",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/nexus",
    github: "https://github.com/nexus",
    linkedin: "https://linkedin.com/company/nexus",
  },
  creator: "@nexus",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "/product#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Integrations", href: "/product#integrations" },
    { label: "API", href: "/product#api" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export const socialLinks = [
  { label: "Twitter", href: siteConfig.links.twitter, icon: "twitter" },
  { label: "GitHub", href: siteConfig.links.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "linkedin" },
];
