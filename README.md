# AstroSeer Chat

An intelligent astrology chat application powered by AI, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🤖 AI-powered chat using LLaMA 3.2 model
- 🌟 Modern UI with cosmic-themed design
- 🎨 Custom animation system for celestial effects
- 🔤 Custom Geist font integration
- 💫 Responsive and accessible design
- ⚡ Server-side rendering for optimal performance
- 🔒 Secure API integration with OpenRouter

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **AI Model:** Meta LLaMA 3.2 (via OpenRouter)
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

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```bash
OPENROUTER_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app                    # Next.js 14 app directory
  /api                 # API routes including chat endpoint
    /chat             # Chat API handling
  /components         # Reusable UI components
  /fonts             # Custom Geist font files
  globals.css        # Global styles
  layout.tsx         # Root layout
  page.tsx           # Home page
/lib                   # Utility functions and services
  /chatService.ts    # Chat interaction logic
  /constants.ts      # Global constants
/cline_docs           # Project documentation
  /activeContext.md  # Current development context
  /productContext.md # Product specifications
  /techContext.md    # Technical documentation
  /progress.md      # Development progress
  /systemPatterns.md # System design patterns
```

## Chat System

The application uses a sophisticated chat system powered by:
- Meta's LLaMA 3.2 3B Instruct model
- OpenRouter API integration
- Custom chat service for handling interactions
- Server-side API routes for secure communication

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

## Documentation

Comprehensive documentation is available in the `cline_docs` directory, covering:
- Product context and specifications
- Technical implementation details
- System patterns and architecture
- Development progress tracking
- Active development context

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [LLaMA Model Documentation](https://ai.meta.com/llama/)

## Deployment

The application can be deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) for optimal performance and reliability.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

Required environment variables:
- `OPENROUTER_API_KEY`: Your OpenRouter API key for accessing the LLaMA model

Make sure to set these in your `.env.local` file during development and in your deployment platform's environment settings.
