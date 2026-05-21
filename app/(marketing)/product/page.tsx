import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlowCard } from "@/components/shared/glow-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, Shield, BarChart3, Globe, Code2, Layers, 
  ArrowRight, Check, Terminal, Webhook, Database 
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Product",
  description: `Explore ${siteConfig.name}'s powerful features, integrations, and API capabilities.`,
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Edge computing with global CDN for sub-100ms response times worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR compliant with end-to-end encryption.",
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Predictive insights and real-time dashboards powered by machine learning.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across 35+ regions with automatic scaling and 99.99% uptime.",
  },
];

const integrations = [
  { name: "Stripe", category: "Payments", icon: "S" },
  { name: "GitHub", category: "DevOps", icon: "Gh" },
  { name: "Slack", category: "Communication", icon: "Sl" },
  { name: "Notion", category: "Productivity", icon: "N" },
  { name: "Figma", category: "Design", icon: "F" },
  { name: "Vercel", category: "Hosting", icon: "V" },
];

const apiFeatures = [
  "RESTful API with comprehensive documentation",
  "GraphQL support for flexible queries",
  "Webhooks for real-time events",
  "SDKs for 10+ programming languages",
  "Rate limiting and usage analytics",
  "Sandbox environment for testing",
];

export default function ProductPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimatedSection className="text-center mb-20">
          <Badge variant="outline" className="mb-4">Product</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need to{" "}
            <GradientText>build and scale</GradientText>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A complete platform for modern teams. From prototyping to production, 
            we provide the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-brand-500 to-purple-600">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-muted-foreground">Built for performance, security, and scale.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <GlowCard className="p-8">
                <feature.icon className="h-10 w-10 text-brand-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Product Tabs */}
        <AnimatedSection className="mb-24">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50">
                  <Terminal className="h-8 w-8 text-brand-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Developer Experience First</h3>
                  <p className="text-muted-foreground mb-6">
                    Our platform is designed with developers in mind. From intuitive APIs to 
                    comprehensive documentation, we make integration seamless.
                  </p>
                  <ul className="space-y-3">
                    {["TypeScript-first SDKs", "Real-time debugging tools", "Automated testing suite"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50">
                  <Database className="h-8 w-8 text-brand-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Managed Infrastructure</h3>
                  <p className="text-muted-foreground mb-6">
                    Focus on your product while we handle the infrastructure. Automatic scaling, 
                    backups, and monitoring included.
                  </p>
                  <ul className="space-y-3">
                    {["Auto-scaling compute", "Automated backups", "Real-time monitoring"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrations">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <AnimatedSection key={integration.name} delay={index * 0.05}>
                    <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center hover:border-brand-500/30 transition-colors">
                      <div className="text-2xl font-bold text-brand-400 mb-2">{integration.icon}</div>
                      <h4 className="font-medium text-sm">{integration.name}</h4>
                      <p className="text-xs text-muted-foreground">{integration.category}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="api">
              <div className="p-8 rounded-2xl border border-border/50 bg-card/50">
                <div className="flex items-center gap-3 mb-6">
                  <Webhook className="h-6 w-6 text-brand-400" />
                  <h3 className="text-2xl font-bold">API Capabilities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                      <Check className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-black/50 font-mono text-sm">
                  <div className="text-muted-foreground mb-2">// Example API Request</div>
                  <div className="text-green-400">GET</div>
                  <div className="text-blue-400">https://api.nexus.dev/v1/projects</div>
                  <div className="text-purple-400 mt-2">Authorization: Bearer {'<token>'}</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </div>
  );
}
