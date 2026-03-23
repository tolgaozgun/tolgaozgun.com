import Link from "next/link";

export function Hero() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-8 pb-6 sm:py-10 sm:pb-8 md:py-12 md:pb-10 max-w-3xl mx-auto w-full">
      <div className="font-hand text-sm sm:text-base text-primary mb-2">
        hey there, welcome!
      </div>
      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-4 sm:mb-5">
        I&apos;m a software engineer<br />
        who loves <em className="text-primary not-italic">building things</em>
        <br />& writing about life.
      </h1>
      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md mb-5 sm:mb-6">
        Turkish, living in the US, doing my Master&apos;s, making a game on the
        side, and trying to share what I learn along the way. This is my little
        corner of the internet.
      </p>
      <div className="flex gap-3 sm:gap-4 flex-wrap">
        <Link
          href="/blog"
          className="text-sm text-primary border-b border-accent pb-0.5 hover:border-primary transition-colors"
        >
          read my blog →
        </Link>
        <Link
          href="/videos"
          className="text-sm text-primary border-b border-accent pb-0.5 hover:border-primary transition-colors"
        >
          watch my videos →
        </Link>
        <a
          href="https://github.com/tolgaozgun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary border-b border-accent pb-0.5 hover:border-primary transition-colors"
        >
          see my projects →
        </a>
      </div>
    </section>
  );
}
