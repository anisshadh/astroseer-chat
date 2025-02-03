# Technical Context

## Technology Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- OpenRouter API with Llama 3.2 3B Instruct model

## Development Setup
- Node.js environment
- Environment variables for API keys
- Local development server

## Technical Constraints
- API response formatting requirements
- Text processing performance considerations
- Frontend rendering limitations

## Implementation Details

### Chat Service
- OpenAI/OpenRouter integration
- System prompt management
- Response processing pipeline
- Error handling

### Text Formatting System
1. Response Processing
   - Regex-based markdown removal
   - Spacing normalization
   - List formatting standardization
   - Punctuation spacing fixes

2. Frontend Rendering
   - CSS whitespace handling
   - Text wrapping control
   - Responsive design considerations

### Component Architecture
- AstroseerChat: Main chat interface
- Message display system
- Input handling
- Loading states

## Performance Considerations
- Response processing overhead
- Text rendering optimization
- State management efficiency

## Security Measures
- API key protection
- Input sanitization
- Error boundary implementation

## Maintenance Requirements
- Regular monitoring of text formatting
- Performance optimization
- User feedback integration
- API response quality checks