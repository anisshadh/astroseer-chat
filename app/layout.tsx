import "./globals.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Astroseer - Cosmic Guidance Through AI",
  description: "Experience personalized astrological insights through an AI-powered cosmic chat interface. Unlock the mysteries of the stars and discover your celestial path.",
  keywords: ["astrology", "AI chat", "cosmic guidance", "horoscope", "celestial insights"],
  authors: [{ name: "Astroseer" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4B0082",
  openGraph: {
    title: "Astroseer - Cosmic Guidance Through AI",
    description: "Experience personalized astrological insights through an AI-powered cosmic chat interface.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
