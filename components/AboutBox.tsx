export function AboutBox() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 md:p-6 md:p-8 flex sm:flex-row flex-col gap-4 sm:gap-5 md:gap-6 items-start">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-muted border-2 border-accent flex items-center justify-center font-hand text-xl text-primary flex-shrink-0">
        :)
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">
        I&apos;m a <strong className="text-foreground font-medium">software engineer from Turkey</strong>,
        currently in the US finishing my Master&apos;s degree. I like helping
        people learn things — through writing, videos, or just honest
        conversation. When I&apos;m not coding I&apos;m building a small game
        that I hope to actually finish someday. This site has no brand, no
        agenda. Just stuff I make and think about.
      </div>
    </div>
  );
}
