import { NextResponse } from 'next/server';
import { generateChatResponse, type ChatMessage } from '@/lib/chatService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = body.messages;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      );
    }

    // Validate each message in the array
    const isValidMessages = messages.every(
      (msg) =>
        msg &&
        typeof msg === 'object' &&
        (msg.role === 'user' || msg.role === 'assistant' || msg.role === 'system') &&
        typeof msg.content === 'string'
    );

    if (!isValidMessages) {
      return NextResponse.json(
        { error: 'Invalid message format in the array' },
        { status: 400 }
      );
    }

    const response = await generateChatResponse(messages);

    if (response.error) {
      return NextResponse.json(
        { error: response.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: response.message });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}