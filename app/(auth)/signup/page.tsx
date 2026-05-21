"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Github, Chrome, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-purple-600">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold">Nexus</span>
        </Link>
        <h1 className="text-2xl font-bold mb-2">Create an account</h1>
        <p className="text-muted-foreground text-sm">
          Start your 14-day free trial today
        </p>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-center gap-2">
          <Chrome className="h-4 w-4" />
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full justify-center gap-2">
          <Github className="h-4 w-4" />
          Continue with GitHub
        </Button>
      </div>

      <div className="flex items-center gap-4 my-6">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">OR</span>
        <Separator className="flex-1" />
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <Input placeholder="John" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <Input placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="hello@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <input type="checkbox" className="rounded border-border mt-1" />
          <span className="text-muted-foreground">
            I agree to the{" "}
            <Link href="/legal/terms" className="text-brand-400 hover:text-brand-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="text-brand-400 hover:text-brand-300">
              Privacy Policy
            </Link>
          </span>
        </div>
        <Button className="w-full bg-gradient-to-r from-brand-500 to-purple-600">
          Create Account
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-400 hover:text-brand-300">
          Sign in
        </Link>
      </p>
    </motion.div>
  );
}
