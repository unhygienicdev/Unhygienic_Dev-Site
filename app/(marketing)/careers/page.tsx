import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, DollarSign, Heart, Coffee, Laptop, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join the ${siteConfig.name} team. We're hiring talented people who want to build the future.`,
};

const benefits = [
  { icon: DollarSign, title: "Competitive Salary", description: "Top-of-market compensation with equity" },
  { icon: Heart, title: "Health & Wellness", description: "Premium health, dental, and vision coverage" },
  { icon: Laptop, title: "Remote First", description: "Work from anywhere in the world" },
  { icon: Coffee, title: "Learning Budget", description: "$5,000 annual learning stipend" },
  { icon: BookOpen, title: "Unlimited PTO", description: "Take time when you need it" },
  { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" },
];

const positions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$140k - $180k",
    description: "Build the future of our user interface with React, TypeScript, and modern web technologies.",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Design and implement scalable APIs and microservices handling millions of requests.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Create intuitive, beautiful experiences that our users love.",
  },
  {
    title: "Developer Advocate",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Build relationships with developers and create compelling technical content.",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Careers</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join our <GradientText>mission</GradientText>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re building the future of cloud infrastructure. Come build it with us.
          </p>
        </AnimatedSection>

        {/* Culture */}
        <AnimatedSection delay={0.1} className="mb-24">
          <div className="p-8 lg:p-12 rounded-2xl border border-border/50 bg-gradient-to-br from-brand-500/10 to-purple-600/10 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We believe in autonomy, mastery, and purpose. Every team member has the freedom to make 
              meaningful decisions, the support to grow their skills, and the opportunity to work on 
              something that matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { number: "15+", label: "Countries" },
                { number: "100%", label: "Remote" },
                { number: "4.9/5", label: "Employee Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-400">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why work at Nexus?</h2>
          <p className="text-muted-foreground">We take care of our team.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.1}>
              <Card className="border-border/50 bg-card/50 h-full">
                <CardContent className="p-6">
                  <benefit.icon className="h-8 w-8 text-brand-400 mb-4" />
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Open Positions */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground">Find your next role.</p>
        </AnimatedSection>
        <div className="space-y-4 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <AnimatedSection key={position.title} delay={index * 0.1}>
              <Card className="border-border/50 bg-card/50 hover:border-brand-500/30 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-brand-400 transition-colors">
                          {position.title}
                        </h3>
                        <Badge variant="secondary">{position.department}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0 group/btn">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
