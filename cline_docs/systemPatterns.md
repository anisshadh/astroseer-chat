# System Patterns

## Architecture Overview
- Next.js 13+ App Router architecture
- Server and client components separation
- Component-based structure with TypeScript

## Directory Structure
```
/app                    # Next.js 13 app directory (main application code)
  /components          # Reusable UI components
  /fonts              # Custom font files (Geist)
  globals.css         # Global styles
  layout.tsx          # Root layout
  page.tsx            # Home page
/lib                   # Utility functions and shared code
/cline_docs            # Project documentation and memory bank
```

## Key Technical Decisions
1. **App Router**
   - Using Next.js 13+ App Router for modern React patterns
   - Server-first approach with client components where needed
   - Built-in routing and layouts

2. **Styling**
   - Tailwind CSS for utility-first styling
   - Custom font implementation (Geist)
   - PostCSS for processing

3. **Type Safety**
   - TypeScript for type safety
   - ESLint for code quality
   - Strict mode enabled

4. **Component Architecture**
   - AstroseerChat as main chat interface
   - Utility functions centralized in lib/utils.ts
   - Shared components in app/components

## Best Practices
1. **Code Organization**
   - Server vs Client components clearly separated
   - Utility functions in dedicated lib directory
   - Component-first architecture

2. **Type Safety**
   - TypeScript strict mode
   - Props interfaces for all components
   - Utility types where appropriate

3. **Styling**
   - Tailwind classes for responsive design
   - Custom utilities extended via tailwind.config
   - Global styles minimized

4. **Performance**
   - Server components by default
   - Client components only when necessary
   - Font optimization with local files