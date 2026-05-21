"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Code2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import { GradientText } from "@/components/shared/gradient-text";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with edge computing and global CDN for sub-100ms response times.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, SSO, and advanced threat detection.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with AI-powered insights and predictive analytics capabilities.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across 35+ regions with automatic scaling and 99.99% uptime guarantee.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "RESTful APIs, webhooks, and SDKs in 10+ languages for seamless integration.",
    color: "from-brand-500 to-indigo-500",
  },
  {
    icon: Layers,
    title: "Flexible Architecture",
    description: "Modular components that adapt to your workflow with customizable automation rules.",
    color: "from-red-500 to-rose-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <GradientText>scale</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern teams who demand performance,
            security, and flexibility.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <GlowCard className="h-full p-6 group cursor-pointer">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
