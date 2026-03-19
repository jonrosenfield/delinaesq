import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // THE PRADA PALETTE — Strict monochrome base
        ink:       '#0A0A0A',
        smoke:     '#111111',
        ash:       '#1C1C1C',
        steel:     '#2A2A2A',
        mist:      '#666666',
        silver:    '#999999',
        bone:      '#CCCCCC',
        ivory:     '#F0EDE8',
        parchment: '#F9F7F4',
        white:     '#FAFAFA',

        // DOPAMINE POPS — CTAs, highlights, accents only
        cobalt: '#0047FF',
        lemon:  '#F5E642',
        blush:  '#FF2D55',
        sage:   '#00C896',
      },
      fontFamily: {
        display:  ['var(--font-cormorant)', 'Georgia', 'serif'],
        editorial:['var(--font-eb-garamond)', 'Georgia', 'serif'],
        sans:     ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono:     ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        // Vogue-scale editorial type
        'headline': ['clamp(5rem, 13vw, 11rem)', { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        'title':    ['clamp(3rem, 7vw, 6.5rem)',  { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'subhead':  ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'eyebrow':  ['0.6875rem',                  { lineHeight: '1',   letterSpacing: '0.2em'  }],
        'body-lg':  ['clamp(1.0625rem, 1.5vw, 1.25rem)', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'body':     ['1rem',                        { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'caption':  ['0.8125rem',                   { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      animation: {
        'float':   'float 6s ease-in-out infinite',
        'grain':   'grain 0.5s steps(10) infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%':      { transform: 'translate(-5%, -10%)' },
          '20%':      { transform: 'translate(-15%, 5%)' },
          '30%':      { transform: 'translate(7%, -25%)' },
          '40%':      { transform: 'translate(-5%, 25%)' },
          '50%':      { transform: 'translate(-15%, 10%)' },
          '60%':      { transform: 'translate(15%, 0%)' },
          '70%':      { transform: 'translate(0%, 15%)' },
          '80%':      { transform: 'translate(3%, 35%)' },
          '90%':      { transform: 'translate(-10%, 10%)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

export default config
