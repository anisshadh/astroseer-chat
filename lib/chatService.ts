import OpenAI from 'openai';
import { SYSTEM_PROMPT } from './constants';

// Types for our chat functionality
export type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

export type ChatResponse = {
  message: string;
  error?: string;
};

// Initialize OpenAI with OpenRouter configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY!,
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'X-Title': 'AstroSeer Chat',
  },
});

// Function to format the response to ensure plain text output
function formatResponse(text: string): string {
  return text
    // Remove markdown code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code backticks
    .replace(/`([^`]+)`/g, '$1')
    // Remove markdown bold/italic
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove markdown headers
    .replace(/#{1,6}\s/g, '')
    // Clean up multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    // Clean up any remaining markdown symbols
    .replace(/[~`*_]{2,}/g, '')
    // Ensure proper spacing after punctuation
    .replace(/([.!?])\s*(\w)/g, '$1 $2')
    // Normalize dashes for lists
    .replace(/[•●■]\s/g, '- ')
    // Trim extra whitespace
    .trim();
}

export async function generateChatResponse(
  messages: ChatMessage[]
): Promise<ChatResponse> {
  try {
    // Prepend the system prompt to the messages array
    const messagesWithSystemPrompt = [SYSTEM_PROMPT, ...messages];

    const completion = await openai.chat.completions.create({
      model: 'meta-llama/llama-3.2-3b-instruct',
      messages: messagesWithSystemPrompt.map(({ role, content }) => ({
        role,
        content,
      })),
    });

    // Format the response before returning
    const formattedMessage = formatResponse(completion.choices[0].message.content || 'No response generated');

    return {
      message: formattedMessage,
    };
  } catch (error) {
    console.error('Error generating chat response:', error);
    return {
      message: '',
      error: 'Failed to generate response. Please try again.',
    };
  }
}