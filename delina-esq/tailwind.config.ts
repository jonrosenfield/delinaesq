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
        // DOPAMINE — hyper-saturated Y2K
        'hot-pink': '#00FF41',
        'electric': '#00F5FF',
        'slime': '#39FF14',
        'cyber-violet': '#BF5AF2',
        'chrome': '#C0C0C0',
        'chrome-light': '#E8E8E8',

        // DARK BASE — near-black with warmth
        void: {
          950: '#0A0A0A',
          900: '#121212',
          850: '#161616',
          800: '#1A1A1A',
          700: '#222222',
          600: '#333333',
          500: '#555555',
          400: '#888888',
          300: '#AAAAAA',
          200: '#CCCCCC',
          100: '#E6E6E6',
        },

        // CREAM / PAPER tones for editorial warmth
        cream: '#FAF7F2',
        paper: '#F0EBE3',
        'warm-white': '#FEFCF9',
      },
      fontFamily: {
        pixel: ['var(--font-silkscreen)', 'monospace'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-space)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '0' }],
        'editorial': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.7', letterSpacing: '0.01em' }],
      },
      borderRadius: {
        'retro': '4px',
        'glass': '12px',
        'pill': '999px',
      },
      backdropBlur: {
        'glass': '20px',
        'heavy': '40px',
      },
      boxShadow: {
        'bevel': '3px 3px 0px #000, inset 1px 1px 0px rgba(255,255,255,0.15)',
        'bevel-sm': '2px 2px 0px #000, inset 1px 1px 0px rgba(255,255,255,0.1)',
        'bevel-pink': '3px 3px 0px #00FF41, inset 1px 1px 0px rgba(255,255,255,0.15)',
        'bevel-cyan': '3px 3px 0px #00F5FF, inset 1px 1px 0px rgba(255,255,255,0.15)',
        'glow-pink': '0 0 15px #00FF41, 0 0 45px rgba(0,255,65,0.4), 0 0 80px rgba(0,255,65,0.15)',
        'glow-cyan': '0 0 15px #00F5FF, 0 0 45px rgba(0,245,255,0.4), 0 0 80px rgba(0,245,255,0.15)',
        'glow-slime': '0 0 15px #39FF14, 0 0 45px rgba(57,255,20,0.4)',
        'glow-violet': '0 0 15px #BF5AF2, 0 0 45px rgba(191,90,242,0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.6)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-drift': 'floatDrift 12s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'squish': 'squish 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'tilt-in': 'tiltIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'grain': 'grain 0.5s steps(10) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-0.5deg)' },
        },
        floatDrift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -20px) rotate(2deg)' },
          '50%': { transform: 'translate(-5px, -10px) rotate(-1deg)' },
          '75%': { transform: 'translate(8px, -25px) rotate(1.5deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.3)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        squish: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(0.92, 1.08)' },
          '60%': { transform: 'scale(1.04, 0.96)' },
          '100%': { transform: 'scale(1)' },
        },
        tiltIn: {
          '0%': { opacity: '0', transform: 'perspective(600px) rotateX(-8deg) translateY(30px)' },
          '100%': { opacity: '1', transform: 'perspective(600px) rotateX(0) translateY(0)' },
        },
        scrollHint: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(8px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
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
