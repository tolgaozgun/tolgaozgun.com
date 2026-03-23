import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-4 md:px-8 md:py-6">
      <Link href="/" className="font-hand text-lg sm:text-xl text-primary">
        tolga :)
      </Link>
      <div className="flex gap-3 sm:gap-5 md:gap-7 text-xs sm:text-sm text-muted-foreground">
        <Link
          href="/about"
          className="hover:text-primary transition-colors"
        >
          about
        </Link>
        <Link
          href="/blog"
          className="hover:text-primary transition-colors"
        >
          blog
        </Link>
        <Link
          href="/videos"
          className="hover:text-primary transition-colors"
        >
          videos
        </Link>
      </div>
    </nav>
  );
}
