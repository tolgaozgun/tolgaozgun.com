import { Navigation } from "@/components/Navigation";
import { AboutBox } from "@/components/AboutBox";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-3xl mx-auto w-full">
        <div className="section-label">about me</div>

        <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
          <AboutBox />

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              I like working on problems that live at the intersection of
              machine learning and systems architecture. I gravitate toward
              backend engineering, distributed systems, and building robust
              infrastructure that can support scale.
            </p>
            <p>
              My current learning focus is on ML rigor and designing highly
              fault-tolerant data systems.
            </p>
            <p>
              I&apos;m also active in tech communities and I&apos;m always
              interested in giving talks or sharing what I&apos;ve learned.
            </p>
            <p>And I have recently gotten into gamedev as a hobby!</p>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="font-serif text-base sm:text-lg text-foreground mb-3">
              Education
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-card border border-border rounded-xl p-3 sm:p-4">
                <div className="font-medium text-foreground text-sm sm:text-base">
                  Carnegie Mellon University
                </div>
                <div className="text-sm text-muted-foreground">
                  Master of Science
                </div>
                <div className="text-xs text-accent mt-1">Aug 2024 - May 2026</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 sm:p-4">
                <div className="font-medium text-foreground text-sm sm:text-base">
                  Bilkent University
                </div>
                <div className="text-sm text-muted-foreground">
                  Bachelor of Science in Computer Engineering
                </div>
                <div className="text-xs text-accent mt-1">Sep 2020 - June 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
