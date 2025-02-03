# System Patterns

## Text Formatting System

### Response Processing Pipeline
1. LLM Generation
   - Raw response from Llama model
   - May contain markdown or inconsistent formatting

2. Text Cleaning (formatResponse function)
   - Removes markdown syntax
   - Normalizes spacing and line breaks
   - Standardizes list formatting
   - Ensures proper punctuation spacing

3. Frontend Rendering
   - Uses whitespace-pre-wrap for proper spacing
   - Implements break-words for text wrapping
   - Maintains styling consistency

### Formatting Rules
1. Plain Text Only
   - No markdown syntax allowed
   - Simple punctuation for emphasis
   - Standard quotation marks

2. List Formatting
   - Simple dashes (-) for unordered lists
   - Numbers (1., 2., etc.) for ordered lists
   - Space indentation for hierarchy

3. Spacing Standards
   - Single line breaks between paragraphs
   - Proper spacing after punctuation
   - Consistent indentation for structured content

## Implementation Details

### System Prompt
- Contains explicit formatting instructions
- Guides LLM response structure
- Ensures consistency across responses

### Response Processing
- Implemented in chatService.ts
- Uses regex for pattern matching
- Maintains content while removing formatting artifacts

### Frontend Display
- CSS classes handle text presentation
- Preserves whitespace and line breaks
- Ensures proper text wrapping

## Best Practices
1. Always process responses before display
2. Maintain consistent spacing rules
3. Use simple, readable formatting
4. Preserve content structure while removing markup
5. Ensure accessibility in text presentation