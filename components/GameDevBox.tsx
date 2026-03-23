export function GameDevBox() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 md:p-6 relative">
      {/* Placeholder badge */}
      <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
        PLACEHOLDER
      </div>

      <div className="inline-flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full mb-3">
        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
        coming soon
      </div>
      <h3 className="font-serif text-base sm:text-lg md:text-xl text-foreground mb-1.5 font-medium">
        I will replace this part with the actual game dev project once I have something to share
      </h3>
      <p className="text-sm leading-loose text-muted-foreground mb-4">
        This section will showcase my game development progress. I&apos;m planning to document my journey learning game development and building my first solo project. Until then, this placeholder text shows where the game dev corner will live on the site.
      </p>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        <span className="text-xs bg-muted text-muted-foreground/70 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border italic">
          Updates coming soon
        </span>
        <span className="text-xs bg-muted text-muted-foreground/70 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border italic">
          Progress to be documented
        </span>
        <span className="text-xs bg-muted text-muted-foreground/70 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border italic">
          More details later
        </span>
      </div>
    </div>
  );
}
