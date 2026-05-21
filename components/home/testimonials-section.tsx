"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GradientText } from "@/components/shared/gradient-text";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    avatar: "SC",
    content: "Nexus transformed our development workflow. We shipped 3x faster and reduced infrastructure costs by 40%. The developer experience is unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "VP Engineering",
    company: "DataSync",
    avatar: "MJ",
    content: "The real-time analytics and AI insights have been game-changing for our product team. We can now make data-driven decisions in minutes, not days.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "CloudScale",
    avatar: "ER",
    content: "We evaluated every major platform and Nexus stood out for its performance, security, and incredible support team. Best investment we made this year.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    company: "AppForge",
    avatar: "DK",
    content: "The API is beautifully designed and the documentation is exceptional. Integration took us less than a day. Truly developer-first.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "StreamLine",
    avatar: "LT",
    content: "Our team productivity increased by 60% after switching to Nexus. The automation features and integrations are incredibly powerful.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "NextGen Labs",
    avatar: "JW",
    content: "Nexus helped us scale from 1K to 100K users without any downtime. The global CDN and auto-scaling are phenomenal.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <GradientText>thousands</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what industry leaders say about their experience with Nexus.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-brand-500/30 transition-colors"
              >
                <Quote className="h-8 w-8 text-brand-500/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-brand-500 to-purple-600 text-white text-sm">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
