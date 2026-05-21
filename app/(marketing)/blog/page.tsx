import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights, tutorials, and updates from the ${siteConfig.name} team.`,
};

const categories = ["All", "Engineering", "AI", "Security", "Product", "Company"];

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
  {
    slug: "product-led-growth",
    title: "Product-Led Growth Strategies That Work",
    excerpt: "How we used product-led growth to acquire 10,000 users in our first year.",
    category: "Product",
    date: "2024-11-28",
    readingTime: 7,
    featured: false,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    excerpt: "Lessons learned from maintaining a 100k+ line TypeScript codebase.",
    category: "Engineering",
    date: "2024-11-20",
    readingTime: 12,
    featured: false,
  },
  {
    slug: "company-culture",
    title: "Building a Remote-First Culture",
    excerpt: "How we built a thriving culture across 15 countries and 3 time zones.",
    category: "Company",
    date: "2024-11-15",
    readingTime: 5,
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Insights & <GradientText>Tutorials</GradientText>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on engineering, product, and building the future of cloud infrastructure.
          </p>
        </AnimatedSection>

        {/* Search & Filter */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-brand-500/20 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Post */}
        {posts.filter(p => p.featured).map((post) => (
          <AnimatedSection key={post.slug} delay={0.3} className="mb-12">
            <Link href={`/blog/${post.slug}`}>
              <div className="group relative rounded-2xl border border-border/50 bg-card/50 overflow-hidden hover:border-brand-500/30 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="gradient" className="w-fit mb-4">Featured</Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-brand-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-500/20 to-purple-600/20 flex items-center justify-center p-12">
                    <div className="text-6xl font-bold text-brand-400/30">{post.category[0]}</div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.filter(p => !p.featured).map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-brand-500/30 transition-colors h-full flex flex-col">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
