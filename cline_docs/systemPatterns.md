# System Patterns

## Architecture Overview
- Next.js 13+ App Router architecture
- Server and client components separation
- Component-based structure with TypeScript
- OpenRouter API integration via server-side routes

## Directory Structure
```
/app                    # Next.js 13 app directory
  /api                 # API routes
    /chat             # Chat endpoint
  /components         # Reusable UI components
  /fonts             # Custom font files (Geist)
  globals.css        # Global styles
  layout.tsx         # Root layout
  page.tsx           # Home page
/lib                   # Utility functions and services
  chatService.ts     # Chat service implementation
  utils.ts           # Shared utilities
/cline_docs            # Project documentation
```

## Key Technical Decisions
1. **App Router**
   - Using Next.js 13+ App Router for modern React patterns
   - Server-first approach with client components where needed
   - Built-in routing and layouts

2. **API Integration**
   - OpenRouter API with meta-llama model
   - Server-side routes for security
   - Environment variables for configuration
   - Error handling and retries

3. **Styling**
   - Tailwind CSS for utility-first styling
   - Custom font implementation (Geist)
   - PostCSS for processing
   - Cosmic theme implementation

4. **Type Safety**
   - TypeScript for type safety
   - ESLint for code quality
   - Strict mode enabled
   - Custom type definitions

5. **Component Architecture**
   - AstroseerChat as main chat interface
   - Chat service in lib/chatService.ts
   - Utility functions centralized
   - Shared components in app/components

## Best Practices
1. **Code Organization**
   - Server vs Client components clearly separated
   - API routes for external services
   - Utility functions in dedicated lib directory
   - Component-first architecture

2. **Type Safety**
   - TypeScript strict mode
   - Props interfaces for all components
   - API type definitions
   - Utility types where appropriate

3. **Styling**
   - Tailwind classes for responsive design
   - Custom utilities extended via tailwind.config
   - Global styles minimized
   - Theme consistency

4. **Security**
   - API keys in environment variables
   - Server-side API routes
   - Input validation
   - Error handling

5. **Performance**
   - Server components by default
   - Client components only when necessary
   - Font optimization
   - Response caching
   - Error recovery strategies