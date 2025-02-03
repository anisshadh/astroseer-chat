# Technology Context

## Stack
- Next.js 13+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint and Prettier for code quality
- OpenRouter API with meta-llama/llama-3.2-3b-instruct model
- OpenAI SDK for API integration

## Tools and Configurations
- postcss.config.mjs for styling
- tsconfig.json for TypeScript configuration
- next.config.mjs for Next.js configuration
- .env.local for environment variables
- components.json for UI configuration
- tailwind.config.js for styling customization

## Development Environment
- macOS Sonoma
- VSCode as primary IDE
- Node.js runtime
- npm package manager

## API Integration
- OpenRouter API endpoint: https://openrouter.ai/api/v1
- API key configured in .env.local
- Server-side API route for secure communication
- Rate limiting and error handling implementation

## Security Measures
- Environment variables for sensitive data
- Server-side API route protection
- Input validation and sanitization
- Secure error handling and logging

## Performance Optimization
- Server components by default
- Client components where necessary
- Font optimization with local files
- Tailwind for efficient styling
- Response caching strategies