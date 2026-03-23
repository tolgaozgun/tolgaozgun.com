# Tolga Ozgun - Personal Website

Personal website with blog, hosted at [tolgaozgun.com](https://tolgaozgun.com).

## Overview

A clean, personal website built with Next.js featuring a warm, cozy design. Includes a blog, about section, and placeholders for future game dev updates and video content.

## Features

- **Blog** - MDX-based blog posts stored in `content/blog/`
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Warm Aesthetic** - Terracotta and cream color scheme with hand-drawn font accents
- **Fast** - Static site generation for optimal performance
- **No Tracking** - Privacy-focused, just a person on the internet

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components (shadcn/ui-inspired)
- **Blog Format**: MDX
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/tolgaozgun/tolgaozgun.com.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory for Firebase Hosting.

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-03-23"
readTime: "5 min"
tags: ["tag1", "tag2"]
description: "A brief description of the post"
---

Your content here written in MDX...
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   └── videos/            # Videos page
├── components/            # React components
├── content/blog/          # Blog post MDX files
├── lib/                   # Utilities (blog parsing)
└── public/                # Static assets
```

## Deployment

The site is automatically deployed to Firebase Hosting via GitHub Actions when pushing to the `main` branch.

To deploy manually:

```bash
npm run build
firebase deploy
```

## License

MIT
