import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const posts = [
  {
    slug: "building-scalable-saas",
    title: "Building Scalable SaaS: Lessons from 10M Users",
    content: `
      <p>Building a SaaS product that scales to millions of users is one of the most challenging engineering feats. In this article, we share the architectural decisions and lessons learned from scaling Nexus to handle over 10 million active users.</p>

      <h2>The Architecture</h2>
      <p>When we started building Nexus, we made several key architectural decisions that would prove critical as we scaled:</p>
      <ul>
        <li>Microservices architecture with clear service boundaries</li>
        <li>Event-driven communication between services</li>
        <li>Multi-region deployment from day one</li>
        <li>CQRS pattern for read/write separation</li>
      </ul>

      <h2>Database Strategy</h2>
      <p>Our database strategy evolved significantly as we grew. We started with a single PostgreSQL instance and gradually moved to a sharded architecture with read replicas across multiple regions.</p>

      <h2>Caching at Scale</h2>
      <p>Effective caching was crucial for maintaining sub-100ms response times. We implemented a multi-layer caching strategy:</p>
      <ul>
        <li>CDN caching for static assets</li>
        <li>Redis for session and application data</li>
        <li>In-memory caching within services</li>
        <li>Edge caching for API responses</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>After three years of scaling, here are our key takeaways:</p>
      <ol>
        <li>Design for scale from the beginning, even if you don't need it yet</li>
        <li>Monitor everything - you can't optimize what you don't measure</li>
        <li>Invest in developer experience - it pays dividends</li>
        <li>Automate everything possible</li>
      </ol>
    `,
    category: "Engineering",
    date: "2024-12-15",
    readingTime: 8,
    author: {
      name: "Alex Rivera",
      avatar: "AR",
      bio: "CEO & Co-founder at Nexus. Former Google Cloud engineer.",
    },
    tags: ["scalability", "architecture", "saas"],
  },
  {
    slug: "ai-powered-analytics",
    title: "The Future of AI-Powered Analytics",
    content: `
      <p>Artificial intelligence is revolutionizing how we analyze data and make decisions. In this article, we explore the current state and future of AI-powered analytics.</p>

      <h2>The Current Landscape</h2>
      <p>Modern analytics platforms are increasingly incorporating AI capabilities to provide deeper insights and automate routine analysis tasks.</p>

      <h2>Key Technologies</h2>
      <ul>
        <li>Natural Language Processing for query interfaces</li>
        <li>Machine Learning for anomaly detection</li>
        <li>Predictive modeling for forecasting</li>
        <li>Automated insight generation</li>
      </ul>
    `,
    category: "AI",
    date: "2024-12-10",
    readingTime: 6,
    author: {
      name: "Maya Patel",
      avatar: "MP",
      bio: "CTO & Co-founder at Nexus. Expert in ML and distributed systems.",
    },
    tags: ["ai", "analytics", "machine-learning"],
  },
];

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160).replace(/<[^>]*>/g, ""),
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <AnimatedSection>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.1}>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-to-br from-brand-500 to-purple-600 text-white">
                {post.author.avatar}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">{post.author.name}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.2}>
          <article 
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </AnimatedSection>

        {/* Tags & Share */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">#{tag}</Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Share:</span>
              <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <Separator className="mb-12" />

        {/* Author Bio */}
        <AnimatedSection delay={0.4}>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50 mb-12">
            <div className="flex items-start gap-4">
              <Avatar className="h-14 w-14">
                <AvatarFallback className="bg-gradient-to-br from-brand-500 to-purple-600 text-white text-lg">
                  {post.author.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <AnimatedSection delay={0.5}>
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="p-6 rounded-xl border border-border/50 bg-card/50 hover:border-brand-500/30 transition-colors">
                    <Badge variant="secondary" className="mb-2">{relatedPost.category}</Badge>
                    <h4 className="font-semibold mb-2">{relatedPost.title}</h4>
                    <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
