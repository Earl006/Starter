/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from "react";
import { HeroSection } from "@/components/blog/HeroSection";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArticleCardSkeleton } from "@/components/layout/Loading";
import { FilterBar } from "@/components/blog/Filter";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedGradient/>
      <HeroSection />
      <FilterBar />
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <ArticleCardSkeleton key={i} />
          ))
        ) : (
          Array.from({ length: 6 }).map((_, i) => (
            <ArticleCard
              key={i}
              title={`Sample Article ${i + 1}`}
              excerpt="Lorem ipsum dolor sit amet..."
              author="John Doe"
              date="2024-03-15"
              category="Technology"
              image="/placeholder.jpg"
            />
          ))
        )}
      </section>
    </div>
  );
}