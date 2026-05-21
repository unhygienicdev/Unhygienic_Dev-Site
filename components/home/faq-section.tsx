"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Nexus and who is it for?",
    answer: "Nexus is a next-generation SaaS platform designed for modern teams who want to build, deploy, and scale applications efficiently. It's perfect for startups, growing businesses, and enterprise teams looking for a powerful, flexible infrastructure solution.",
  },
  {
    question: "How does the pricing work?",
    answer: "We offer a simple tiered pricing model. The Starter plan is free forever for small projects. Pro and Enterprise plans are billed monthly or annually with a 20% discount for annual billing. All paid plans include a 14-day free trial.",
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer tiered support based on your plan. Starter includes community support via Discord and documentation. Pro includes priority email support with 4-hour response time. Enterprise includes 24/7 phone support and a dedicated account manager.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We are SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256. We offer advanced security features including SSO, 2FA, and custom security policies for Enterprise customers.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with Nexus within the first 30 days, contact our support team for a full refund, no questions asked.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked <GradientText>questions</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Nexus.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:border-brand-500/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
