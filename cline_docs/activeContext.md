# Active Context

## Current Task
Implementing proper text formatting for chat responses to ensure human-readable output without markdown artifacts.

## Recent Changes
1. Enhanced SYSTEM_PROMPT in constants.ts with explicit formatting instructions
2. Added formatResponse function in chatService.ts to process and clean responses
3. Updated AstroseerChat.tsx component with proper text formatting CSS

## Technical Details
- Added whitespace handling (whitespace-pre-wrap) in frontend
- Implemented text break handling (break-words)
- Created comprehensive markdown removal in formatResponse
- Added spacing normalization for punctuation
- Standardized list formatting

## Next Steps
1. Monitor response formatting in production
2. Gather user feedback on readability
3. Fine-tune formatting rules if needed