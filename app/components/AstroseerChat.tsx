"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Stars, Send, Sparkles } from "lucide-react"

interface Message {
  text: string
  sender: "user" | "astroseer"
}

export default function AstroseerChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      setMessages([...messages, { text: input, sender: "user" }])
      setInput("")
      setIsLoading(true)

      // Simulate a response from Astroseer
      setTimeout(() => {
        const responses = [
          "The celestial bodies whisper secrets of your path...",
          "Cosmic energies align, revealing hidden truths...",
          "The stars have heard your query, and they respond...",
          "Ancient wisdom emerges from the cosmic void...",
          "The universe unfolds a tapestry of possibilities...",
        ]
        const response = responses[Math.floor(Math.random() * responses.length)]
        setMessages((prev) => [...prev, { text: response, sender: "astroseer" }])
        setIsLoading(false)
      }, 1500)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault()
        handleSend()
      }
    }

    window.addEventListener("keypress", handleKeyPress)

    return () => {
      window.removeEventListener("keypress", handleKeyPress)
    }
  }, [input, handleSend])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    // Focus input after messages change
    inputRef.current?.focus()
  }, [messages])

  // Focus input on component mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-radial from-indigo-900 via-purple-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 bg-stars opacity-40" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-nebula opacity-20" aria-hidden="true"></div>
      <div className="absolute inset-0 cosmic-swirl opacity-10" aria-hidden="true"></div>
      <div className="relative z-10 flex flex-col h-screen p-4 md:p-8">
        <header className="text-center mb-8 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 mb-2 animate-title-glow">
            Astroseer
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-300 opacity-80">Unlock the Cosmic Enigma</h2>
          <Sparkles className="absolute -top-4 -left-4 text-yellow-200 animate-twinkle-slow opacity-50" aria-hidden="true" size={24} />
          <Sparkles className="absolute -bottom-4 -right-4 text-yellow-200 animate-twinkle-slow opacity-50" aria-hidden="true" size={24} />
        </header>
        <div 
          className="flex-grow bg-black bg-opacity-30 rounded-lg p-4 overflow-y-auto mb-4 backdrop-blur-sm border border-purple-500 border-opacity-20"
          role="log"
          aria-label="Chat messages"
        >
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}
              role="article"
              aria-label={`${message.sender} message`}
            >
              <span
                className={`inline-block p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-purple-700 bg-opacity-30 text-white"
                    : "bg-indigo-700 bg-opacity-30 text-white"
                } backdrop-blur-sm animate-fade-in-subtle max-w-[80%]`}
              >
                {message.text}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="text-left mb-4" role="status" aria-label="Astroseer is typing">
              <span className="inline-block p-3 rounded-lg bg-indigo-700 bg-opacity-30 text-white backdrop-blur-sm animate-pulse-subtle">
                ✨ Consulting the stars...
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex items-center bg-black bg-opacity-30 rounded-full backdrop-blur-sm border border-purple-500 border-opacity-20">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent text-white p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-full"
            placeholder="Whisper to the cosmos..."
            aria-label="Chat input"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            className="p-4 text-purple-300 hover:text-purple-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
            disabled={isLoading || !input.trim()}
          >
            <Send size={24} className="animate-pulse-subtle opacity-70 hover:opacity-100" aria-hidden="true" />
          </button>
        </div>
      </div>
      <Moon className="absolute top-8 right-8 text-yellow-200 animate-float-subtle opacity-50" aria-hidden="true" size={32} />
      <Stars className="absolute bottom-8 left-8 text-yellow-200 animate-twinkle-slow opacity-50" aria-hidden="true" size={32} />
    </div>
  )
}
