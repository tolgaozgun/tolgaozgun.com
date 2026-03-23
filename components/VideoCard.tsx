export function VideoCard() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden relative opacity-70">
      <div className="absolute top-2 right-2 z-10 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
        PLACEHOLDER
      </div>
      <div className="h-20 sm:h-24 bg-muted flex items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 text-6xl font-bold text-muted-foreground">
          ▶
        </div>
        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary/50 rounded-full flex items-center justify-center relative z-10">
          <div className="w-0 h-0 border-t-[6px] sm:border-t-[7px] border-b-[6px] sm:border-b-[7px] border-l-[11px] sm:border-l-[13px] border-t-transparent border-b-transparent border-l-card/50 ml-0.5" />
        </div>
      </div>
      <div className="p-2.5 sm:p-3">
        <h4 className="text-xs sm:text-sm font-medium text-muted-foreground leading-snug mb-1">
          I will replace this with actual YouTube videos once I create content
        </h4>
        <p className="text-xs text-muted-foreground/70">
          Coming soon
        </p>
      </div>
    </div>
  );
}
