import { Navigation } from "@/components/Navigation";
import { VideoCard } from "@/components/VideoCard";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto w-full">
        <div className="section-label">videos</div>

        {/* Placeholder notice */}
        <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800 font-medium flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Videos coming soon — I&apos;ll replace this section once I start creating content
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </main>
  );
}
