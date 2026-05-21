"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/shared/gradient-text";
import { formatDate } from "@/lib/utils";

const posts = [
  {
    slug: "building-scalable-saas",
    title: "Building Scalable SaaS: Lessons from 10M Users",
    excerpt: "How we architected Nexus to handle millions of concurrent users with sub-100ms latency.",
    category: "Engineering",
    date: "2024-12-15",
    readingTime: 8,
    featured: true,
  },
  {
    slug: "ai-powered-analytics",
    title: "The Future of AI-Powered Analytics",
    excerpt: "Explore how artificial intelligence is transforming data analytics and decision-making.",
    category: "AI",
    date: "2024-12-10",
    readingTime: 6,
    featured: false,
  },
  {
    slug: "security-best-practices",
    title: "Enterprise Security Best Practices for 2025",
    excerpt: "A comprehensive guide to securing your SaaS application in the modern threat landscape.",
    category: "Security",
    date: "2024-12-05",
    readingTime: 10,
    featured: false,
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Latest from our <GradientText>blog</GradientText>
            </h2>
            <p className="text-muted-foreground">
              Insights, tutorials, and industry updates.
            </p>
          </div>
          <Link href="/blog">
            <motion.span
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-brand-500/30 transition-colors h-full flex flex-col"
                >
                  {post.featured && (
                    <Badge variant="gradient" className="absolute top-4 right-4">
                      Featured
                    </Badge>
                  )}

                  <Badge variant="secondary" className="w-fit mb-4">
                    {post.category}
                  </Badge>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </span>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
