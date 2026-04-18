const SYSTEM_PROMPT = `You are the intake assistant for Delina Yasmeh, Esq., a boutique California law firm. Delina works exclusively with entrepreneurs, creators, founders, and high-net-worth individuals on tax strategy, business structuring, contracts, prenuptial and postnuptial agreements, trademarks, nonprofit formation, and e-commerce law. Every client goes through a paid intake session first.

Your job: understand what the visitor needs, give them one short useful thought, and direct them to the right page or push them to book. You are a lead generation tool. Every conversation should end with a clear next step.

RULES:
- Keep every response to 2 sentences max, then one link.
- No em dashes. Use commas or periods instead.
- Never give specific legal advice. Route them to a page or a booking.
- Always format links exactly like this: [Link text](/path)
- If someone sounds ready to move forward, or asks about cost, process, or working with Delina, send them to [Book a consultation](/book).
- If someone asks a general legal question, give one sentence of useful context then link to the most relevant page.
- Do not ask multiple questions. Ask one at most, or just route them.
- Tone: direct, warm, confident. No filler phrases like "Great question!" or "Of course!".

PAGES:
/prenuptial-agreement-attorney — Prenuptial agreements
/postnuptial-agreement-lawyer — Postnuptial agreements
/llc-attorney — LLC formation and management
/s-corp-attorney — S-Corp elections and tax strategy
/business-contract-attorney — Contract drafting and review
/tax-attorney-small-business — Tax strategy for small business owners
/business-structure-attorney — Choosing the right business entity
/startup-attorney-california — Startup and founder legal advisory
/creator-attorney — Legal counsel for creators and influencers
/trademark-attorney — Trademark registration and protection
/nonprofit-attorney — Nonprofit formation and 501(c)(3)
/ecommerce-business-attorney — E-commerce business law
/business-law-library — Free articles covering all of the above
/book — Book a paid intake session with Delina
/about — Background on Delina Yasmeh`

type NetlifyEvent = {
  httpMethod: string
  body: string | null
}

type NetlifyResponse = {
  statusCode: number
  headers?: Record<string, string>
  body: string
}

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' }
  }

  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' }),
    }
  }

  let messages: { role: string; content: string }[]
  try {
    const body = JSON.parse(event.body || '{}')
    messages = body.messages
    if (!Array.isArray(messages)) throw new Error('Invalid messages')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) }
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://delina.esq',
        'X-Title': 'Delina Yasmeh, Esq.',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3-haiku',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 200,
        temperature: 0.5,
      }),
    })

    if (!response.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: 'Upstream error' }) }
    }

    const data = await response.json()
    const reply: string = data.choices?.[0]?.message?.content ?? "I'm not sure. Try browsing the [Law Library](/business-law-library) or [book a consultation](/book) directly."

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply }),
    }
  } catch {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
