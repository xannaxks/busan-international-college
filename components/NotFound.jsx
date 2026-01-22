// app/not-found.tsx (App Router) or pages/404.tsx (Pages Router)
"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Animated mascot */}
        <div className="animate-float mb-8">
          <Image
            src="/mascot-crimson-search.svg"
            alt="Searching mascot"
            width={256}
            height={256}
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black text-primary animate-pulse-glow">
          404
        </h1>

        {/* Message */}
        <div className="mt-4 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Oops! Looks like this page wandered off somewhere.
            Our mascot is searching, but no luck yet!
          </p>
        </div>

        {/* Back home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow animate-bounce-in"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Fun animated dots */}
        <div className="flex gap-2 mt-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary/60 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
