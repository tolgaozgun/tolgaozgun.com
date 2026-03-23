import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SquiggleSeparator } from "@/components/SquiggleSeparator";
import { BlogPreview } from "@/components/BlogPreview";
import { AboutBox } from "@/components/AboutBox";
import { GameDevBox } from "@/components/GameDevBox";
import { VideoCard } from "@/components/VideoCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="w-full">
        <Hero />

        <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto w-full">
          <SquiggleSeparator />
        </div>

        <section className="px-4 sm:px-6 md:px-8 py-4 pb-8 sm:pb-10 max-w-3xl mx-auto w-full">
          <div className="section-label">from the blog</div>
          <BlogPreview />
        </section>

        <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto w-full">
          <SquiggleSeparator />
        </div>

        <section className="px-4 sm:px-6 md:px-8 py-4 pb-8 sm:pb-10 max-w-3xl mx-auto w-full">
          <div className="section-label">a bit about me</div>
          <AboutBox />
        </section>

        <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto w-full">
          <SquiggleSeparator />
        </div>

        <section className="px-4 sm:px-6 md:px-8 py-4 pb-8 sm:pb-10 max-w-3xl mx-auto w-full">
          <div className="section-label">game dev corner</div>
          <GameDevBox />
        </section>

        <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto w-full">
          <SquiggleSeparator />
        </div>

        <section className="px-4 sm:px-6 md:px-8 py-4 pb-8 sm:pb-10 max-w-4xl mx-auto w-full">
          <div className="section-label">latest videos</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </section>
      </div>

      <footer className="text-center py-6 sm:py-8 font-hand text-sm sm:text-base text-accent px-4">
        made with love ❤️
      </footer>
    </main>
  );
}
