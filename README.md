# AstroSeer Chat

An interactive astrology chat application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌟 Modern UI with cosmic-themed design
- 🎨 Custom animation system for celestial effects
- 🌙 Dark mode support
- 🔤 Custom Geist font integration
- 💫 Responsive and accessible design
- ⚡ Server-side rendering for optimal performance

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom cosmic theme
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Custom components with shadcn/ui patterns

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd astroseer-chat
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app                    # Next.js 13 app directory
  /components          # Reusable UI components
  /fonts              # Custom Geist font files
  globals.css         # Global styles
  layout.tsx          # Root layout
  page.tsx            # Home page
/lib                   # Utility functions
/cline_docs            # Project documentation
```

## Styling System

The project uses a custom cosmic theme built on Tailwind CSS, featuring:

- Custom color palette with cosmic-inspired colors
- Animated components with celestial effects
- Consistent spacing and typography system
- Dark mode support
- Neon glow effects

### Custom Animations

- Float subtle effect
- Twinkle animation
- Pulse subtle
- Fade in subtle
- Title glow

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Geist, providing a modern and clean typography system.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment

The application can be deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) for optimal performance and reliability.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
