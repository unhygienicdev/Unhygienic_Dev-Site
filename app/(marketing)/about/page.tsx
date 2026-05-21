import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}'s mission, vision, and the team behind the platform.`,
};

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technology to solve complex problems.",
    icon: "🚀",
  },
  {
    title: "Customer Obsessed",
    description: "Every decision we make starts with our customers' needs and success in mind.",
    icon: "❤️",
  },
  {
    title: "Transparency",
    description: "We believe in open communication, honest pricing, and clear documentation.",
    icon: "🔍",
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in engineering, design, and support.",
    icon: "⭐",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-founder",
    avatar: "AR",
    bio: "Former engineer at Google Cloud. Passionate about building developer tools.",
  },
  {
    name: "Maya Patel",
    role: "CTO & Co-founder",
    avatar: "MP",
    bio: "Ex-Netflix engineer. Expert in distributed systems and scalability.",
  },
  {
    name: "James Chen",
    role: "Head of Design",
    avatar: "JC",
    bio: "Previously led design at Figma. Believes in pixel-perfect experiences.",
  },
  {
    name: "Sofia Martinez",
    role: "VP Engineering",
    avatar: "SM",
    bio: "Former Stripe engineer. Expert in API design and developer experience.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description: "Nexus founded with a vision to simplify cloud infrastructure for developers.",
  },
  {
    year: "2022",
    title: "Beta Launch",
    description: "Released beta to 500 early users. Achieved 99.9% uptime from day one.",
  },
  {
    year: "2023",
    title: "Series A",
    description: "Raised $12M to expand team and accelerate product development.",
  },
  {
    year: "2024",
    title: "Public Launch",
    description: "Official launch with 10,000+ active users and enterprise customers.",
  },
  {
    year: "2025",
    title: "Global Scale",
    description: "Expanded to 35+ regions. Processing 1B+ API requests per month.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimatedSection className="text-center mb-20">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Building the future of{" "}
            <GradientText>cloud infrastructure</GradientText>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re on a mission to make cloud infrastructure accessible, powerful, and delightful for every developer.
          </p>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <AnimatedSection delay={0.1}>
            <div className="p-8 rounded-2xl border border-border/50 bg-card/50">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize cloud infrastructure by providing developers with powerful, intuitive tools 
                that eliminate complexity and accelerate innovation. We believe every team deserves 
                enterprise-grade infrastructure without the enterprise-grade headaches.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl border border-border/50 bg-card/50">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where developers can focus on building great products instead of managing infrastructure. 
                Where scaling from zero to millions happens seamlessly. Where the best tools are available 
                to teams of any size.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground">The principles that guide everything we do.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center h-full">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground">Key milestones in our story.</p>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto mb-24">
          {timeline.map((item, index) => (
            <AnimatedSection key={item.year} delay={index * 0.1}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-brand-400 font-medium">{item.year}</span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Team */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-muted-foreground">The people behind Nexus.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.1}>
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-br from-brand-500 to-purple-600 text-white text-xl">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-brand-400 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
