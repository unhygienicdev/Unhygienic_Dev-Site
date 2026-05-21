import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Read ${siteConfig.name}'s cookie policy.`,
};

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2025</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="prose prose-invert max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to 
            website owners.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>

          <h2>3. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Please note that 
            removing or blocking cookies may impact your user experience.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            We may use third-party services that set their own cookies. These include analytics 
            providers and advertising partners. Please refer to their respective privacy policies 
            for more information.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We encourage you to review this 
            policy periodically for any changes.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
