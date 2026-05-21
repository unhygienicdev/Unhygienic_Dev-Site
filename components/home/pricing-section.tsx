"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: 0,
    period: "month",
    features: [
      "Up to 3 projects",
      "10,000 API calls/month",
      "Basic analytics",
      "Community support",
      "1 team member",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing teams with advanced needs",
    price: 29,
    period: "month",
    features: [
      "Unlimited projects",
      "100,000 API calls/month",
      "Advanced analytics & AI insights",
      "Priority support",
      "Up to 10 team members",
      "Custom integrations",
      "SSO authentication",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    price: 99,
    period: "month",
    features: [
      "Everything in Pro",
      "Unlimited API calls",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Unlimited team members",
      "Custom contracts",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent <GradientText>pricing</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative rounded-2xl border p-6 lg:p-8 h-full flex flex-col",
                  plan.highlighted
                    ? "border-brand-500/50 bg-gradient-to-b from-brand-500/10 to-transparent shadow-lg shadow-brand-500/10"
                    : "border-border/50 bg-card/50"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-purple-600 px-3 py-1 text-xs font-medium text-white">
                      <Zap className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-brand-400 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full",
                    plan.highlighted
                      ? "bg-gradient-to-r from-brand-500 to-purple-600 hover:opacity-90"
                      : ""
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
