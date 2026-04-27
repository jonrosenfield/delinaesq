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
  const [showTooltip, setShowTooltip] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
      setShowTooltip(false)
    }
  }, [open])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowTooltip(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

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
      {/* Chat panel — opens leftward from the right-side tab */}
      <div
        className={`fixed right-14 z-50 w-[340px] sm:w-[380px] flex flex-col transition-all duration-300 ${
          open ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
        style={{ top: 'calc(50% - 260px)', maxHeight: 'min(520px, calc(100vh - 120px))' }}
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

      {/* Tooltip bubble — appears to the left of the tab */}
      <div
        className={`fixed right-14 z-50 transition-all duration-300 ${
          showTooltip && !open ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
        style={{ top: 'calc(50% - 24px)' }}
      >
        <div className="bg-white text-ink font-sans text-[12px] px-3.5 py-2 whitespace-nowrap leading-snug shadow-xl relative">
          Have a legal question? Ask me anything.
          <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rotate-45" />
        </div>
      </div>

      {/* Right-side vertical tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => { setOpen((o) => !o); setShowTooltip(false) }}
          aria-label="Toggle chat assistant"
          className={`flex flex-col items-center gap-3 px-3 py-5 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border-l border-t border-b ${
            open
              ? 'bg-ink text-white/60 border-white/20 hover:text-white'
              : 'bg-white text-ink border-white/0 hover:bg-white/90'
          }`}
          style={!open ? {
            boxShadow: '0 0 0 1px rgba(255,255,255,0.75), -4px 0 24px rgba(255,255,255,0.18), -8px 0 60px rgba(255,255,255,0.08)',
            animation: 'searchGlow 2.8s ease-in-out infinite',
          } : undefined}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ transform: 'rotate(0deg)' }}>
            <path
              d="M1 1h12v9H8L5 13v-3H1V1z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
              fill={open ? 'none' : 'currentColor'}
              fillOpacity={open ? 0 : 0.12}
            />
          </svg>
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            {open ? 'Close' : 'Ask Delina AI'}
          </span>
        </button>
      </div>
    </>
  )
}
