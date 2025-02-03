import OpenAI from 'openai';

// Types for our chat functionality
export type ChatMessage = {
  role: 'user' | 'assistant';
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

export async function generateChatResponse(
  messages: ChatMessage[]
): Promise<ChatResponse> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'meta-llama/llama-3.2-3b-instruct',
      messages: messages.map(({ role, content }) => ({
        role,
        content,
      })),
    });

    return {
      message: completion.choices[0].message.content || 'No response generated',
    };
  } catch (error) {
    console.error('Error generating chat response:', error);
    return {
      message: '',
      error: 'Failed to generate response. Please try again.',
    };
  }
}