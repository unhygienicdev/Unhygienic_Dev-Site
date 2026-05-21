"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";

const clients = [
  { name: "Vercel", logo: "▲" },
  { name: "Stripe", logo: "S" },
  { name: "Linear", logo: "L" },
  { name: "Notion", logo: "N" },
  { name: "Figma", logo: "F" },
  { name: "Slack", logo: "Sl" },
  { name: "Discord", logo: "D" },
  { name: "GitHub", logo: "Gh" },
];

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by industry-leading companies
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <span className="text-2xl font-bold">{client.logo}</span>
              <span className="text-lg font-semibold">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
