import { Navigation } from "@/components/Navigation";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-3xl mx-auto w-full">
        <div className="section-label">all posts</div>

        {/* Sample content notice */}
        <div className="mt-4 mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800 font-medium flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Blog coming soon — I&apos;ll replace this section once I start writing. Create posts in <code className="bg-amber-100 px-1.5 py-0.5 rounded text-amber-900">content/blog/</code>
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4 py-3 sm:py-5 border-b border-border last:border-b-0 -mx-1 sm:-mx-2 px-1 sm:px-2 rounded-lg opacity-60"
            >
              <div className="post-dot mt-1.5 sm:mt-2" />
              <div>
                <div className="text-xs text-accent mb-1">
                  Coming soon · Placeholder
                </div>
                <h3 className="font-serif text-base sm:text-lg text-muted-foreground mb-1 font-medium leading-snug italic">
                  I will replace this part with the actual blog once I write it. This is just placeholder text to show where the blog posts will appear once I start publishing content here.
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground/70 leading-relaxed mb-2">
                  This placeholder demonstrates the layout and styling that will be used for actual blog posts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
