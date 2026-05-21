import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read ${siteConfig.name}'s terms of service.`,
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2025</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="prose prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Nexus services, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Nexus provides cloud infrastructure and developer tools. We reserve the right to modify, 
            suspend, or discontinue any part of the service at any time.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and 
            for all activities that occur under your account. You must notify us immediately of any 
            unauthorized use.
          </p>

          <h2>4. Payment and Billing</h2>
          <p>
            Some services require payment. You agree to pay all fees associated with your account. 
            Fees are non-refundable except as required by law or as explicitly stated in our refund policy.
          </p>

          <h2>5. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any illegal purpose</li>
            <li>Interfere with or disrupt the service</li>
            <li>Attempt to gain unauthorized access to any part of the service</li>
            <li>Upload malicious code or content</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Nexus shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of California, without regard 
            to its conflict of law provisions.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
