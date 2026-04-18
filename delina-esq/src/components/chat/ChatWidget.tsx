'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

/** Parses [text](/path) markdown links in AI responses into JSX */
function MessageContent({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          const [, label, href] = match
          const isExternal = href.startsWith('http')
          if (isExternal) {
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-white/90 hover:text-white transition-colors"
              >
                {label}
              </a>
            )
          }
          return (
            <Link
              key={i}
              href={href}
              className="underline underline-offset-2 text-white/90 hover:text-white transition-colors"
            >
              {label}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

const OPENING_MESSAGE: Message = {
  role: 'assistant',
  content: "Taxes, contracts, LLC formation, prenups, trademarks. Tell me what you are dealing with and I will point you to the right place, or get you [booked with Delina](/book) directly.",
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMessage: Message = { role: 'user', content: text }
    const next = [...messages, userMessage]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || "I'm not sure. Try browsing the [Law Library](/business-law-library) or [book a consultation](/book) directly.",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Something went wrong. Please try [booking a consultation](/book) directly.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-[340px] sm:w-[380px] flex flex-col transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
        style={{ maxHeight: 'min(520px, calc(100vh - 120px))' }}
      >
        {/* Panel */}
        <div className="flex flex-col bg-ink border border-white/10 overflow-hidden" style={{ maxHeight: 'inherit' }}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 flex-shrink-0">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-0.5">
                Ask Delina.ESQ
              </span>
              <p className="font-sans text-[13px] text-white/80">
                What is your situation?
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/30 hover:text-white/70 transition-colors ml-4 flex-shrink-0"
              aria-label="Close chat"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] font-sans text-[14px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white/10 text-white/90 px-4 py-2.5'
                      : 'text-white/70'
                  }`}
                >
                  <MessageContent text={msg.content} />
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-1 px-1 py-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/8 px-5 py-3.5 flex items-center gap-3 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question…"
              disabled={loading}
              className="flex-1 bg-transparent outline-none text-white/80 placeholder:text-white/25 font-sans text-[14px] disabled:opacity-50"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="font-mono text-[14px] text-white/40 hover:text-white disabled:opacity-20 transition-colors flex-shrink-0"
              aria-label="Send"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 border font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-200 ${
          open
            ? 'bg-white text-ink border-white'
            : 'bg-ink text-white/70 border-white/20 hover:border-white/50 hover:text-white'
        }`}
        aria-label="Toggle chat assistant"
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M1 1h11v8H7.5L4.5 12V9H1V1z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        {open ? 'Close' : 'Ask'}
      </button>
    </>
  )
}
